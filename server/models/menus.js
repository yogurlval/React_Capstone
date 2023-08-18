const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    Item: sequelize.define('item', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    item_name: DataTypes.STRING,
    item_type: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL
  })
}