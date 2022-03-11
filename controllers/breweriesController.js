const openbrewerydbAPI = require('../api/openbrewerydb')

const getBreweriesFromOpenbrewerydbAPI = async (byCity, byState, byType) => {
  const sourceData = await openbrewerydbAPI.getBreweries(byCity, byState, byType)

  if (sourceData) {
    console.log(sourceData.data)
    const breweries = sourceData.data
    return breweries
  } else {
    return undefined
  }
}

const breweriesController = {
  getBreweries: async (req, res) => {
    const { by_city, by_state, by_type } = req.query

    const breweries = await getBreweriesFromOpenbrewerydbAPI(by_city, by_state, by_type)

    res.status(200).json({ data: breweries })
  }
}

module.exports = breweriesController