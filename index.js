require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.SERVER_PORT
const routes = require('./routes/main-route')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())
app.use(routes)

app.listen(PORT, () => {
    console.log("Server is running at port: ", PORT)
})
