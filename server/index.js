const express = require('express')
const cors = require('cors')
const app = express()

const {sequelize} = require('./util/database')
const {getAllItems} = require('./controllers/menu')

// const {Item} = require('./models/appModels')

const seed = require('./util/seed')


app.use(express.json())
app.use(cors())


app.get('/menu', getAllItems)
  



sequelize
    .sync({ force: true })
    .then(async () => {
        console.log('tables and seed data sent');
        await seed(); // Wait for the seed function to complete
        app.listen(4004, () => console.log(`Vibing on Port 4004`));
    })
    .catch((err) => {
        console.log('connection error', err);
    });



