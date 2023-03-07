const express=require('express')
const connectdb=require('./config/connectdb')
const app= express()

require('dotenv').config()

const PORT =process.env.PORT
connectdb()
app.listen(PORT,(err)=>(
    (err)?console.log(err):console.log('server is runing'+PORT)))