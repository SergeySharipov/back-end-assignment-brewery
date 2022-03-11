const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

/*** GET /unknown ***/

describe('GET /unknown', () => {
  let response

  beforeAll(async () => {
    response = await api.get('/unknown')
  })

  it('should return 404',
    async () => {
      expect(response.status).toBe(404)
    })

  it('should return content-type "application/json"',
    async () => {
      expect(response.headers['content-type']).toContain('application/json')
    })

  it('should return "body.error" is "Unknown Route"',
    async () => {
      expect(response.body['error']).toBe('Unknown Route')
    })
})

/*** GET /breweries ***/

describe('GET /breweries?by_type=invalid', () => {
  let response

  beforeAll(async () => {
    response = await api.get('/breweries?by_type=invalid')
  })

  it('should return 400',
    async () => {
      expect(response.status).toBe(400)
    })

  it('should return content-type "application/json"',
    async () => {
      expect(response.headers['content-type']).toContain('application/json')
    })

  it('should return "body.error" is "type_of parameter is invalid"',
    async () => {
      expect(response.body['error']).toBe('type_of parameter is invalid')
    })
})