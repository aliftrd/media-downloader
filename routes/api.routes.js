const express = require('express')
require('express-group-routes')
const routes = express.Router()

const ApiController = require('../controllers/ApiController')

routes.group('/api', (routes) => {
    routes.post('/instagram', ApiController.instagram)
})

module.exports = routes