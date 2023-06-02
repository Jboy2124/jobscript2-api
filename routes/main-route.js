const express = require('express')
const router = express.Router()
const Greet = require('../controllers/handlers/greetings')

module.exports = router 
    .get('/greet', Greet.greet)