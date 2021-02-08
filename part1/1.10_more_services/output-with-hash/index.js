const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

function generateRandomStr() {
    // Read the timestamp
    const dat = fs.readFileSync('./time/timeStamp.txt')
    // Generate random string and bind
    return `${dat}: ${uuidv4()}`  
}

function generateForever() {
    let randomStr = generateRandomStr()
    fs.appendFileSync('randomStrLogs.txt', randomStr+"\n")
    console.log(randomStr)
    setTimeout(generateForever, 5000)
}

generateForever();