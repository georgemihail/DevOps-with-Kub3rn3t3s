const express = require('express')
const app = express()

let pong = 0

app.get('/', (_req, res) => {
    pong++
    res.send(`pong ${pong}`)
})

const PORT = 3003
app.listen(PORT, () => {
    console.log(`server is listen to ${PORT}`)
})