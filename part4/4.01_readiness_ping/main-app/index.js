const express = require('express')
const app = express()
const axios = require('axios')
require('dotenv').config()

const { v4: uuidv4 } = require('uuid');
const pongUrl = process.env.PONGURL || 'http://localhost:3003'

function generateRandomStr() {
    var a = new Date()
    let dat = a.getFullYear()+"-"+a.getUTCMonth() + 1+"-"+a.getDate()+ "T"+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
    return `${dat}: ${uuidv4()}`  
}

app.get('/', async (_req, res) => {
    try {
        let pingpong = await axios(pongUrl)
        let message = process.env.MESSAGE
        res.send(
            `
            <p>${message}</p>
            <p>${generateRandomStr()}</p>
            <p>${pingpong.data}</p>
            `
            )
    } catch(err) {
        res.status(500).send(err.message)
    }
})

// Check health
app.get('/healthz', (_req, res) => {
    try {
        return res.sendStatus(200)
    } catch (e) {
        return res.sendStatus(500)
    }
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is listen to ${PORT}`)
})