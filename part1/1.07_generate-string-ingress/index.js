const express = require('express')
const app = express()

const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

function generateRandomStr() {
    var a = new Date()
    let dat = a.getFullYear()+"-"+a.getUTCMonth() + 1+"-"+a.getDate()+ "T"+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
    return `${dat}: ${uuidv4()}`  
}

function generateForever() {
    let randomStr = generateRandomStr()
    fs.appendFileSync('randomStrLogs.txt', randomStr+"\n")
    console.log(randomStr)
    setTimeout(generateForever, 5000)
}

app.get('/', (_req, res) => {
    res.send(generateRandomStr())
})

const PORT = 3002
app.listen(PORT, () => {
    console.log(`server is listen to ${PORT}`)
})