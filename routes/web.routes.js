const express = require('express')
require('express-group-routes')
const routes = express.Router()

const HomeController = require('../controllers/HomeController')

routes.get('/', HomeController.index)

module.exports = routes