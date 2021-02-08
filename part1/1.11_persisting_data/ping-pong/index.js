const express = require('express')
const app = express()
const fs = require('fs')

let pong = 0

app.get('/', (_req, res) => {
    let val
    try {
        val = fs.readFileSync('./file/readPong.txt')
    }
    catch (err) {
        fs.writeFileSync('./file/readPong.txt', pong.toString())
    }
    if (!parseInt(val)) {
        pong++
        fs.writeFileSync('./file/readPong.txt', pong.toString())
        fs.writeFileSync('./file/readPingPong.txt', `Ping / Pongs: ${pong.toString()}`)
    } else {
        pong = parseInt(val)
        pong++
        fs.writeFileSync('./file/readPong.txt', pong.toString())
        fs.writeFileSync('./file/readPingPong.txt', `Ping / Pongs: ${pong.toString()}`)
    }
    res.send(`pong ${pong}`)
})

const PORT = 3003
app.listen(PORT, () => {
    console.log(`server is listen to ${PORT}`)
})