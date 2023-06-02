const Greet = require('../../models/greetings')

module.exports = {
    greet(req, res){
        try {
            const result = Greet.greet()
            res.json(result)
        } catch (error) {
            console.log(error)
        }
    },

    async get(req, res){
        try {
            const data = await Greet.list()
            res.json(data)
        } catch (error) {
            console.log(error)
        }
    }
}