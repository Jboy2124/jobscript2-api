const Joi = require('joi')
const Jobs = require('../../models/jobs')

module.exports = {
    async get(req, res){

        const schema = Joi.object({
            limit: Joi.number()
                .required(),
            offset: Joi.number()
                .required()
        })

        try {
            const data = await schema.validateAsync(req.query)
            const result = await Jobs.list(data)
            // res.json(result)
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
        }
    },

    async post(req, res){
        const schema = Joi.object({
            id: Joi.number()
                .required(),
            jobTitle: Joi.string()
                .required(),
            minSalary: Joi.number()
                .required(),
            maxSalary: Joi.number()
                .required()
        })

        try {
            
            const data = await schema.validateAsync(req.body)
            const result = await Jobs.store(data)
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