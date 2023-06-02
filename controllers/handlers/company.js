const Joi = require('joi')
const Company = require('../../models/company')

module.exports = {
    async get(req, res){
        try {
            
        } catch (error) {
            
        }
    },

    async post(req, res){
        const schema = Joi.object({
            company: Joi.string()
                .required(),
            address: Joi.string()
                .optional(),
            city: Joi.string()
                .required(),
            province: Joi.string()
                .required(),
            country: Joi.string()
                .optional()
        })

        try {
            
            const data = await schema.validateAsync(req.body)
            const result = await Company.store(data)
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