const knex = require('../config/knex')

module.exports = {
    async list(params){

        const {
            limit,
            offset
        } = params

        try {
            const result = await knex('_careers')
                .select({
                    id: '_id',
                    job: '_job_title',
                    desc: '_job_desc'
                })
                .where('_status', 'Active')
                .limit(limit)
                .offset(offset)

            return { careers : result }

        } catch (error) {
            console.log(error)
        }
    },

    async store(payload){
        const { 
            job, 
            desc
        } = payload

        try {
            const [id] = await knex('_careers')
                .insert({
                    _job_title: job,
                    _job_desc: {
                        primary: desc.primary,
                        secondary: desc.secondary
                    }
                })
            return id
        } catch (error) {
            console.log(error)
        }
    },

    async modify(id){
        try {
            
        } catch (error) {
            console.log(error)
        }
    },

    async find(id){
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
}