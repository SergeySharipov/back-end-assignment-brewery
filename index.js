const app = require('./app')
const http = require('http')
const logger = require('./utils/logger')

const server = http.createServer(app)

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
  logger.info('Server listening on port: ' + PORT)
})