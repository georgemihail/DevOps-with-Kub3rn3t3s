const express = require('express')
const app = express()
const axios = require('axios')
require('dotenv').config()

const { v4: uuidv4 } = require('uuid');

function generateRandomStr() {
    var a = new Date()
    let dat = a.getFullYear()+"-"+a.getUTCMonth() + 1+"-"+a.getDate()+ "T"+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
    return `${dat}: ${uuidv4()}`  
}

app.get('/', async (_req, res) => {
    try {
        let pingpong = await axios('http://localhost:3003')
        let message = process.env.MESSAGE
        res.send(
            `
            <p>${message}</p>
            <p>${generateRandomStr()}</p>
            <p>${pingpong.data}</p>
            `
            )
    } catch(err) {
        res.send(err.message)
    }
})

const PORT = 3002
app.listen(PORT, () => {
    console.log(`server is listen to ${PORT}`)
})