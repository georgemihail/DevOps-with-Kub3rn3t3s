const { Sequelize, DataTypes } = require('sequelize');

// Database setup
// Make connection
const host = process.env.HOST || 'localhost:5432'
const pass = process.env.PASSWORD || 'mysecretpassword'
const db = process.env.DATABASE || 'postgres'

console.log(`Connect to host: ${host} - db: ${db}`)

const sequelize = new Sequelize(`postgres://postgres:${pass}@${host}/${db}`)

// Authenticate
const auth = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
auth()

// Make schema
const Pong = sequelize.define('pongs', {
    requests: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})

sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`);
});

module.exports = {
    Pong
}