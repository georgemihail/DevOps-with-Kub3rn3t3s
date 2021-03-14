const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const link = `${process.env.BACKENDLINK}/ping` || 'http://localhost:3002/ping'
console.log('Backend link is: ' + link)
console.log('process.env.BACKENDLINK is: ' + process.env.BACKENDLINK)

app.get('/', async (_req, res) => {
    try {
        const response = await axios.get(link)
        console.log('access form /')
        res.send(`pong ${response.data.requests}`)
    } catch (e) {
        console.log('error in : /')
        console.log('Error: ', e)
        console.log('Error message: ', e.message)
    }
})

app.get('/pingpong', async (_req, res) => {
    try {
    const response = await axios.get(link)
    console.log('access from /pingpong')
    res.send(`pong ${response.data.requests}`)
    } catch(e) {
        console.log('error in /pingpong')
        console.log('Error: ', e)
        console.log('Error message: ', e.message)
    }
})

// Check the (indirect) connection to db
app.get('/healthz', async (_req, res) => {
    try {
        const response = await axios.get(`${process.env.BACKENDLINK}/healthz`)
        if (response)
            return res.sendStatus(200)
    } catch(e) {
        return res.sendStatus(500)
    }
})

// Check the communcation with the app
app.get('/ping', (_req, res) => {
    try {
        return res.sendStatus(200)
    } catch(e) {
        return res.sendStatus(500)
    }
})

const PORT = 3003
app.listen(PORT, () => {
    console.log(`server is listen to ${PORT}`)
})