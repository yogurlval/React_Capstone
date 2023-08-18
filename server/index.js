const express = require('express')
const cors = require('cors')
const app = express()

const {getAllItems} = require('./controllers/menu')

const {sequelize} = require('./util/database')
// const {item} = require('./models/menus')


app.use(express.json())
app.use(cors())


app.get('/menu', getAllItems)



sequelize.sync()
.then(()=>{
app.listen(4004, () => console.log(`Vibing on Port 4004`))
})
.catch(err => console.log(err))