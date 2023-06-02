const Greet = require('../../models/greetings')

module.exports = {
    greet(req, res){
        try {
            const result = Greet.greet()
            res.json(result)
        } catch (error) {
            console.log(error)
        }
    }
}