const express = require('express')
const app = express()
const routes = require('./routes')
const middleware = require('./utils/middleware')

app.use(middleware.requestLogger)

app.use('/', routes)

app.use(middleware.unknownRoute)

module.exports = app