const express = require('express')
const app = express()
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');

app.use(express.json())
app.use(cors())

let todos = [
]

app.get('/', (_req, res) => {
    res.json(todos)
})

app.post('/', (req, res) => {
    try {
        const todo = req.body
        const newTodo = {...todo, id: uuidv4()}
        todos = todos.concat(newTodo)
        if (!todo.text) {
            throw new Error('Invalid parameters')
        }
        return res.json(newTodo)
    } catch (e) {
        console.log("Error: --- ", e.message)
    }
    
})

app.post('/:id', (req, res) => {
    const id = req.params.id
    const todo = todos.find(t => t.id === id)
    if (!todo)
        throw new Error('Invalid id')
    const newTodo = {...todo, done: !todo.done}
    todos = todos.map(t =>
        t.id === id ? newTodo : t
    )
    return res.json(newTodo)
})

const PORT = 3005

app.listen(PORT, () => {
    console.log('server is listen at ' + PORT)
})