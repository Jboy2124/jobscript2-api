const express = require('express')
const router = express.Router()
const Greet = require('../controllers/handlers/greetings')
const Company = require('../controllers/handlers/company')

module.exports = router 
    .get('/greet', Greet.greet)
    .get('/users', Greet.get)

    // COMPANY
    .post('/company', Company.post)