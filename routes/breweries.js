const router = require('express').Router()
const breweriesController = require('../controllers/breweriesController')

router.get('/', breweriesController.getBreweries)

module.exports = router