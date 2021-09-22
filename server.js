const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors')
const routes = require('./routes/index.routes')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
const publicDir = path.join(__dirname, './public')
app.use(express.static(publicDir))
app.set('view engine', 'ejs');
// Routes
app.use(routes)

try {
    app.listen(port, () => {
        console.log(`[SERVER] Server listen on ${port}`);
    })
} catch (err) {
    console.log(`[SERVER] Error : ${err}`);
}