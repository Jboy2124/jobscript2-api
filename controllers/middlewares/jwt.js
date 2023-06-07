const jwt = require('jsonwebtoken')

module.exports = {
    signin(payload){
        try {
            jwt.sign({
                data: payload
            }, process.env.JWT_PRIVATE_KEY, {
                algorithm: 'HS256',
                expiresIn: process.env.JWT_EXPIRY
            })
        } catch (error) {
            console.log(error)
        }
    },

    verify(token){
        try {
            const isMatch = jwt.verify(token, process.env.JWT_PRIVATE_KEY)
            return isMatch     
        } catch (error) {
            console.log(error)
        }
    }
}