const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const fs = require('fs')

const path = require('path')
const app = express()

app.disable('x-powered-by')
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

if(process.env.NODE_ENV === 'development') app.use(morgan('dev'))
if(process.env.NODE_ENV !== 'production') require('dotenv').load()


app.use('/auth', require('./routes/auth'))
app.use('/users', require('./routes/users'))
app.use('/runs', require('./routes/runs'))
app.use('/tracks', require('./routes/tracks'))


app.use((req, res, next) => next({status: 404, message: 'Route not found' }))


app.use((err, req, res, next) => {
  const errorMessage = {}

  if(process.env.NODE_ENV !== 'production' && err.stack)
    errorMessage.stack = err.stack

  errorMessage.status = err.status || 500
  errorMessage.message = err.message || 'Internal Server Error'

  res.status(errorMessage.status).send(errorMessage)
})


const http = require('http').Server(app);
const port = process.env.PORT || 3000
http.listen(port, () => {console.log(`Listening on port ${port}`)})


module.exports = app
