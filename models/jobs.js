const knex = require('../config/knex')

module.exports = {
    async list(query){
        const {
            limit,
            offset
        } = query

        try {
            const result = await knex('_job_postings')
                .select({
                    id: '_job_postings._id',
                    company: 'comp._company_name',
                    address: 'comp._address',
                    city: 'comp._city_municipality',
                    prov: 'comp._province',
                    job: '_job_Title',
                    minSalary: '_min_salary',
                    maxSalary: '_max_salary'
                })
                .leftJoin('_company_info as comp', 'comp._id','_job_postings._company_id')
                .limit(limit)
                .offset(offset)
            
            
                

            return { 
                jobs : result 
            }
            
        } catch (error) {
            console.log(error)
        }
    },

    async count(){
        try {
            const total = await knex('_job_postings').count('_id as totalRows')
            return { total: total }
        } catch (error) {
            console.log(error)
            throw error
        }
    },

    async store(payload){
        const {
            id,
            jobTitle,
            minSalary,
            maxSalary,
        } = payload

        try {
            
            const [_id] = await knex('_job_postings')
                .insert({
                    _company_id: id,
                    _job_title: jobTitle,
                    _min_salary: minSalary,
                    _max_salary: maxSalary,
                })
            return _id

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

    async find(payload){
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
}