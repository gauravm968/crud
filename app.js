require('dotenv').config();
const express = require('express');
const cors = require('cors');      // allow cross origin request

const connectToDb = require('./config/db.js');

const app = express();

//express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())

//init connection to db
connectToDb();

const userRoute = require('./routes/userRoute.js')

// app.get('/', userRoute)  
app.use('/', userRoute)       //use all type request (get,post,put,delete)

module.exports = app;

//package.json ---> "type":"module" its enables ES6 modules like:
// import express from "express"
// export default app         
