const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const { stopExceededLength } = require('./middleware/stopExceededLength')
const { Todo } = require('./models/sequelize')

app.use(express.json())
app.use(cors())

// Middlewares
app.use(stopExceededLength)
app.use(morgan('short'))

app.get('/', async (_req, res) => {
    const response = await Todo.findAll()
    res.json(response)
})

app.post('/', async (req, res) => {
    try {
        const todo = req.body
        if (!todo.text) {
            throw new Error('Invalid parameters')
        }
        const newTodo = await Todo.create({
            text: todo.text,
            done: false
        })
        return res.json(newTodo)
    } catch (e) {
        console.log("Error: --- ", e.message)
    }
})

app.post('/:id', async (req, res) => {
    const id = req.params.id
    const todo = await Todo.findByPk(id)
    if (todo === null)
        throw new Error('Not found this id ' + id)
    todo.done = !todo.done
    await todo.save()
    return res.json(todo)
})

const PORT = 3005

app.listen(PORT, () => {
    console.log('server is listen at ' + PORT)
})