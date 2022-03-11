const breweriesController = {
  getBreweries: async (req, res) => {
    res.status(200).json({ data: 'success' })
  }
}

module.exports = breweriesController