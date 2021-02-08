const fs = require('fs');

function generateTimestamp() {
    var a = new Date()
    let dat = a.getFullYear()+"-"+a.getUTCMonth() + 1+"-"+a.getDate()+ "T"+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
    return dat 
}

function generateTimestampForever() {
    let randomStr = generateTimestamp()
    fs.writeFileSync('./time/timeStamp.txt', randomStr)
    console.log(randomStr)
    setTimeout(generateTimestampForever, 5000)
}

generateTimestampForever();