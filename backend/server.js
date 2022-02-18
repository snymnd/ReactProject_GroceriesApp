const express = require('express')
const cors = require('cors')
const monogoose = require('mongoose')

//file requiring
const groceriesRouter = require('./routes/groceries')
const usersRouter = require('./routes/users')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json())

//router middleware that always being routed if url has the route string
app.use('/groceries', groceriesRouter)
app.use('/users', usersRouter)


//monogoose
const uri = process.env.ATLAS_URI
monogoose.connect(uri)
const connection = monogoose.connection
connection.once('open', ()=>{
    console.log('Mongo DB connection established succesfully')
})

app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`);
})