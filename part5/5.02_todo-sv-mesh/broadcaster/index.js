const NATS = require('nats')
let nc = NATS.connect({
    url: process.env.NATS_URL|| 'nats://localhost:4222'
});
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()


nc.on('connect', (c) => {
    // Do something with the connection
    console.log('subscriber connected to nats!')
    console.log('Connected to ' + nc.currentServer.url.host)
    // When done close it
});
nc.on('error', (err) => {
    console.log(err)
});

// https://www.npmjs.com/package/node-telegram-bot-api
// https://www.npmjs.com/package/nats/v/1.4.1-3
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.BOT;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

const chatId = process.env.CHAT

// Todos
nc.subscribe('todos', {queue: "workers"}, function (msg) {
    console.log('Received a message: ' + msg)
    bot.sendMessage(chatId, msg);
})