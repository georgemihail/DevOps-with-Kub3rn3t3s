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

generateForever();