const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const link = process.env.BACKENDLINK || 'http://localhost:3002/ping'
console.log('Backend link is: ' + link)
console.log('process.env.BACKENDLINK is: ' + process.env.BACKENDLINK)

app.get('/', async (_req, res) => {
    const response = await axios.get(link)
    console.log(response.data)
    res.send(`pong ${response.data.requests}`)
})

const PORT = 3003
app.listen(PORT, () => {
    console.log(`server is listen to ${PORT}`)
})