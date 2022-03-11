const axios = require('axios')
const cachios = require('cachios')
const { OPEN_BREWERY_DB_API_URL } = require('../constants/openbrewerydb.constants')

const axiosInstance = axios.create({
  baseURL: OPEN_BREWERY_DB_API_URL
})

const api = cachios.create(axiosInstance)

// Send a GET request to openbrewerydb REST API, cache duration 10s
const getBreweries = async (byCity, byState, byType) => {
  return api.get('/breweries', { params: { ttl: 10, by_city: byCity, by_state: byState, by_type: byType } })
}

module.exports = { getBreweries }