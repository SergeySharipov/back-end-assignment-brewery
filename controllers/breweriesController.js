const openbrewerydbAPI = require('../api/openbrewerydb')

const getBreweriesFromOpenbrewerydbAPI = async () => {
  const sourceData = await openbrewerydbAPI.getBreweries()
  const breweries = sourceData.data

  return breweries
}

const breweriesController = {
  getBreweries: async (req, res) => {

    const breweries = await getBreweriesFromOpenbrewerydbAPI()

    res.status(200).json({ data: breweries })
  }
}

module.exports = breweriesController