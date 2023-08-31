require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const {sequelize} = require('./util/database')
const {getAllItems} = require('./controllers/menu')
const {getOrders, deleteOrder} = require('./controllers/orders')
const { submitOrder } = require('./controllers/cart')

// const {Item} = require('./models/appModels')

const seed = require('./util/seed')


app.use(express.json())
app.use(cors())


app.get('/menu', getAllItems)
app.get('/orders', getOrders)

app.post('/cart', submitOrder)

app.delete('/orders/:id', deleteOrder)
  



sequelize
    .sync()
    .then(async () => {
        await seed();
        console.log('tables and seed data sent');
        app.listen(4004, () => console.log(`Vibing on Port 4004`));
    })
    .catch((err) => {
        console.log('connection error', err);
    });



