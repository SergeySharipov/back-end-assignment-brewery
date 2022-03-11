const axios = require('axios')
const { OPEN_BREWERY_DB_API_URL } = require('../constants/openbrewerydb.constants')

const api = axios.create({
  baseURL: OPEN_BREWERY_DB_API_URL
})

const getBreweries = async (byCity, byState, byType) => {
  return api.get('/breweries', { params: { by_city: byCity, by_state: byState, by_type: byType } })
}

module.exports = { getBreweries }