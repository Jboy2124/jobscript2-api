const Joi = require('joi')
const Careers = require('../../models/careers')

module.exports = {
    async get(req, res){
        try {
            const data = await Careers.list()
            res.json(data)
        } catch (error) {
            console.log(error)
        }
    },

    async post(req, res){
        const schema = Joi.object({
            job: Joi.string()
                .required(),
            desc: Joi.object({
                primary: Joi.string()
                    .optional(),
                secondary: Joi.string()
                    .optional()
            })
        })

        try {

            const data = await schema.validateAsync(req.body)
            const result = await Careers.store(data)
            res.json(result)
            
        } catch (error) {
            console.log(error)
        }
    },

    async patch(req, res){
        try {
            
        } catch (error) {
            console.log(error)
        }
    },

    async delete(req, res){
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
}