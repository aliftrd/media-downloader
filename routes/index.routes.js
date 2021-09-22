const express = require('express')
const routes = express.Router()

// Static routes
const web = require('./web.routes')
const api = require('./api.routes')

routes.use(web)
routes.use(api)

module.exports = routes