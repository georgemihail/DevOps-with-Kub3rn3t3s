const express = require('express')
const app = express()

let pong = 0

app.get('/', (_req, res) => {
    pong++
    res.write(`pong ${pong}`)
    res.write(`\n`)
    res.end()
})

const PORT = parseInt(process.env.LISTEN) || 8080
app.listen(PORT, () => {
    console.log(`server is listen to ${PORT}`)
})