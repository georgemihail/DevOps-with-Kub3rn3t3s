const express = require('express')
const app = express()
const NATS = require('nats')
let nc = NATS.connect({
    url: process.env.NATS_URL|| 'nats://localhost:4222'
})
const cors = require('cors')
const morgan = require('morgan')
const { stopExceededLength } = require('./middleware/stopExceededLength')
const { Todo } = require('./models/sequelize')
const imgPath = '/image/day.jpg'

// Nats connection
nc.on('connect', (c) => {
    // Do something with the connection
    console.log('publisher connected to nats!')
    console.log('Connected to ' + nc.currentServer.url.host)
    // When done close it
});
nc.on('error', (err) => {
    console.log(err)
});

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

// Middlewares
app.use(stopExceededLength)
app.use(morgan('short'))

app.get('/todos', async (_req, res) => {
    const response = await Todo.findAll()
    res.json(response)
})

app.post('/todos', async (req, res) => {
    try {
        const todo = req.body
        if (!todo.text) {
            throw new Error('Invalid parameters')
        }
        const newTodo = await Todo.create({
            text: todo.text,
            done: false
        })
        // send to nats subscriber
        let message = `
        A task was created:
        {
            task: "${newTodo.text}",
            "done": "${newTodo.done}",
            "id": "${newTodo.id}",
            "userId": null,
            "createdAt": "${newTodo.createdAt}",
            "updatedAt:" "${newTodo.updatedAt}"
        }`
        nc.publish('todos', message);

        return res.json(newTodo)
    } catch (e) {
        console.log("Error: --- ", e.message)
    }
})

app.put('/todos/:id', async (req, res) => {
    const id = req.params.id
    const todo = await Todo.findByPk(id)
    if (todo === null)
        throw new Error('Not found this id ' + id)
    todo.done = !todo.done
    await todo.save()

    // send to nats subscriber
    let message = `
    A task was updated:
    {
        "task": "${todo.text}",
        "done": "${todo.done}",
        "id": "${todo.id}",
        "userId": null,
        "createdAt": "${todo.createdAt}",
        "updatedAt:" "${todo.updatedAt}"
    }`
    nc.publish('todos', message);
    return res.json(todo)
})

app.get('/image', (_req, res) => {
    res.sendFile(imgPath, { root : __dirname })
})

app.get('/healthz', async (_req, res) => {
    try {
        const response = await Todo.findAll()
        if (response)
            return res.sendStatus(200)
    } catch (e) {
        return res.sendStatus(500)
    }
})

const PORT = 3005

app.listen(PORT, () => {
    console.log('server is listen at ' + PORT)
})