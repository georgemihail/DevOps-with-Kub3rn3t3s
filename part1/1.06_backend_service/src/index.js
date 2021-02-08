const express = require('express')
const app = express()

app.get('/api/ping', (_req, res) => {
    res.send('pong')
})

app.get('/', (_req, res) => {
    res.sendFile('static/index.html', {root: __dirname })
})

const PORT = 3001
app.listen(PORT, () => {
    console.log("Server started in port " + PORT)
})