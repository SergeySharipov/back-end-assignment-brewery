const axios = require('axios')
const { OPEN_BREWERY_DB_API_URL } = require('../constants/openbrewerydb.constants')

const api = axios.create({
  baseURL: OPEN_BREWERY_DB_API_URL
})

const getBreweries = async () => api.get('/breweries')

module.exports = { getBreweries }