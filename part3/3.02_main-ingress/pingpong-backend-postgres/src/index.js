// const { Sequelize, DataTypes } = require('sequelize');
const express = require('express')
const bodyParser = require('body-parser');
const { Pong } = require('./models/sequelize')

const app = express()
app.use(bodyParser.json());

app.get('/', (_req, res) => {
    res.send('Hello')
})

app.get('/ping', async (req, res) => {
    const requests = await Pong.findByPk(1)
    if (requests === null) {
        // create a new entry, 1
        const ping = await Pong.create({ requests: 1 })
        res.json(ping)
    } else {
        // increment by 1
        const incrementalRes = await requests.increment('requests', {by: 1})
        res.json(incrementalRes)
    }
});

const PORT = 3002
app.listen(PORT, () => {
    console.log('Server is listen at ' + PORT)
})