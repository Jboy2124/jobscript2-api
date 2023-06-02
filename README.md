# jobscript2-api

### Libraries/Dependencies/NPM Packages
    "bcrypt": "^5.1.0",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.1.3",
    "express": "^4.18.2",
    "joi": "^17.9.2",
    "jsonwebtoken": "^9.0.0",
    "knex": "^2.4.2",
    "mysql2": "^3.3.3",
    "nodemon": "^2.0.22"
## 

### How to install/use the libraries or packages: 
    npm install (libraries/package name)
## 

### Nodemon Configuration:
    "scripts": {
        "server": "nodemon index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
##

### Knex Configuration
    const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOSTNAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
        },
        pool: { min: 0, max: 10 }
    })

    module.exports = knex
##