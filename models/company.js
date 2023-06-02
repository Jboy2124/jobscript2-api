const knex = require('../config/knex')

module.exports = {
    async list(){
        try {
            
        } catch (error) {
            console.log(error)
        }
    },

    async store(payload){

        const {
            company,
            address,
            city,
            province,
            country
        } = payload

        try {
            const [id] = await knex('_company_info')
                .insert({
                    _company_name: company,
                    _address: address,
                    _city_municipality: city,
                    _province: province,
                    _country: country,
                })
            return id

        } catch (error) {
            console.log(error)
        }
    },

    async modify(){
        try {
            
        } catch (error) {
            console.log(error)
        }
    },

    async find(){
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
}