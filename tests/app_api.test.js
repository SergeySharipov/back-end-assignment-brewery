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

describe('GET /breweries?by_type=invalid (by_type is invalid)', () => {
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

describe('GET /breweries?by_city=invalid (by_city is invalid)', () => {
  let response

  beforeAll(async () => {
    response = await api.get('/breweries?by_city=invalid')
  })

  it('should return 404',
    async () => {
      expect(response.status).toBe(404)
    })

  it('should return content-type "application/json"',
    async () => {
      expect(response.headers['content-type']).toContain('application/json')
    })

  it('should return "body.error" is "Not Found"',
    async () => {
      expect(response.body['error']).toBe('Not Found')
    })
})

describe('GET /breweries?by_state=invalid (by_state is invalid)', () => {
  let response

  beforeAll(async () => {
    response = await api.get('/breweries?by_state=invalid')
  })

  it('should return 404',
    async () => {
      expect(response.status).toBe(404)
    })

  it('should return content-type "application/json"',
    async () => {
      expect(response.headers['content-type']).toContain('application/json')
    })

  it('should return "body.error" is "Not Found"',
    async () => {
      expect(response.body['error']).toBe('Not Found')
    })
})

describe('GET /breweries (no parameters)', () => {
  let response

  beforeAll(async () => {
    response = await api.get('/breweries')
  })

  it('should return 200',
    async () => {
      expect(response.status).toBe(200)
    })

  it('should return content-type "application/json"',
    async () => {
      expect(response.headers['content-type']).toContain('application/json')
    })

  it('should return "body.data" containing array',
    async () => {
      expect(Array.isArray(response.body['data'])).toBe(true)
    })
})

describe('GET /breweries?by_city=new_york (by_city is valid)', () => {
  let response

  beforeAll(async () => {
    response = await api.get('/breweries?by_city=new_york')
  })

  it('should return 200',
    async () => {
      expect(response.status).toBe(200)
    })

  it('should return content-type "application/json"',
    async () => {
      expect(response.headers['content-type']).toContain('application/json')
    })

  it('should return "body.data" containing array',
    async () => {
      expect(Array.isArray(response.body['data'])).toBe(true)
    })
})

describe('GET /breweries?by_state=ohio  (by_state is valid)', () => {
  let response

  beforeAll(async () => {
    response = await api.get('/breweries?by_state=ohio')
  })

  it('should return 200',
    async () => {
      expect(response.status).toBe(200)
    })

  it('should return content-type "application/json"',
    async () => {
      expect(response.headers['content-type']).toContain('application/json')
    })

  it('should return "body.data" containing array',
    async () => {
      expect(Array.isArray(response.body['data'])).toBe(true)
    })
})

describe('GET /breweries?by_type=micro (by_type is valid)', () => {
  let response

  beforeAll(async () => {
    response = await api.get('/breweries?by_type=micro')
  })

  it('should return 200',
    async () => {
      expect(response.status).toBe(200)
    })

  it('should return content-type "application/json"',
    async () => {
      expect(response.headers['content-type']).toContain('application/json')
    })

  it('should return "body.data" containing array',
    async () => {
      expect(Array.isArray(response.body['data'])).toBe(true)
    })
})

describe('GET /breweries?by_state=ohio&by_type=micro (by_state is valid, by_type is valid)', () => {
  let response

  beforeAll(async () => {
    response = await api.get('/breweries?by_state=ohio&by_type=micro')
  })

  it('should return 200',
    async () => {
      expect(response.status).toBe(200)
    })

  it('should return content-type "application/json"',
    async () => {
      expect(response.headers['content-type']).toContain('application/json')
    })

  it('should return "body.data" containing array',
    async () => {
      expect(Array.isArray(response.body['data'])).toBe(true)
    })
})