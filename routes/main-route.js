const express = require('express')
const router = express.Router()
const Greet = require('../controllers/handlers/greetings')
const Company = require('../controllers/handlers/company')
const Job = require('../controllers/handlers/jobs')
const Careers = require('../controllers/handlers/careers')

module.exports = router 
    .get('/greet', Greet.greet)
    .get('/users', Greet.get)

    // COMPANY
    .post('/company', Company.post)

    // JOBS
    .post('/job', Job.post)
    .get('/jobs', Job.get)

    // CAREERS
    .post('/careers', Careers.post)
    .get('/careers', Careers.get)