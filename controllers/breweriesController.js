const { validTypesOfBrewery } = require('../constants/request.constants')
const { status, error } = require('../constants/response.constants')
const openbrewerydbAPI = require('../api/openbrewerydb')

const getBreweriesFromOpenbrewerydbAPI = async (byCity, byState, byType) => {
  const sourceData = await openbrewerydbAPI.getBreweries(byCity, byState, byType)

  if (sourceData) {
    const breweries = sourceData.data
    return breweries
  } else {
    return undefined
  }
}

const validateQueryParameters = (byCity, byState, byType) => {
  // Handle byType is invalid error
  if (byType && !validTypesOfBrewery.includes(byType)) {
    return error.TYPE_OF_BREWERY_INVALID
  }
}

const breweriesController = {
  getBreweries: async (req, res) => {
    const { by_city, by_state, by_type } = req.query

    const validationError = validateQueryParameters(by_city, by_state, by_type)
    // Handle validation errors
    if (validationError) {
      res.status(status.BAD_REQUEST_CODE).json({ error: validationError })
      return
    }

    const breweries = await getBreweriesFromOpenbrewerydbAPI(by_city, by_state, by_type)

    if (breweries && breweries.length > 0) {
      res.status(status.SUCCESS_CODE).json({ data: breweries })
    } else {
      res.status(status.NOT_FOUND).json({ error: error.NOT_FOUND })
    }
  }
}

module.exports = breweriesController