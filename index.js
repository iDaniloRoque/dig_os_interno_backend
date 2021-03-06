require("dotenv").config()

const app = require('express')()
const consign = require('consign')
const db = require('./config/db')


app.db = db

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/auth.js')
    .then('./api/client.js')
    .then('./config/routes.js')
    
     .into(app)

app.listen(process.env.PORT || 4000, () => {
    console.log("Backend Executando...")
})