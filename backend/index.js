const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv');

const { 
  MONGO_CONNECTION_SUCCESS,
  SERVER_CONNECTION_SUCCESS,
  MONGO_CONNECTION_ERROR,
  SERVER_CONNECTION_ERROR
} = require('./constant')


dotenv.config()

const { mLabsUrl, PORT } = process.env

mongoose.connect(mLabsUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if(err) {
    console.error(MONGO_CONNECTION_ERROR)
  } else {
    console.info(MONGO_CONNECTION_SUCCESS)
  } 
})

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(require('./routes'))

app.listen(PORT, (err) => {
  if(err) {
    console.error(SERVER_CONNECTION_ERROR)
  } else {
    console.info(SERVER_CONNECTION_SUCCESS)
  }
})
