const { status, error } = require('../constants/response.constants')
const logger = require('./logger')

const requestLogger = (request, response, next) => {
  logger.info('---')
  logger.info('Method:', request.method)
  logger.info('Path:  ', request.path)
  logger.info('Query: ', request.query)
  logger.info('Body:  ', request.body)
  logger.info('---')
  next()
}

const unknownRoute = (request, response) => {
  response.status(status.NOT_FOUND).send({ error: error.UNKNOWN_ROUTE })
}

module.exports = {
  requestLogger,
  unknownRoute
}