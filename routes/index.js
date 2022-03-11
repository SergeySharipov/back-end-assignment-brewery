const router = require('express').Router()
const breweriesRouter = require('./breweries')

router.use('/breweries', breweriesRouter)

module.exports = router