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

module.exports = {
  requestLogger
}