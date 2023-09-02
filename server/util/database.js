require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
})
console.log('Sequelize initialized.');

module.exports = {
    sequelize
}