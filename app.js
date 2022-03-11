const express = require('express')
const app = express()
const middleware = require('./utils/middleware')

app.use(middleware.requestLogger)

module.exports = app