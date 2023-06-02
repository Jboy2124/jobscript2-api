const knex = require('../config/knex')

module.exports = {
    async list(){
        try {
            const result = await knex('_job_postings')
                .select({
                    company: '_company_info._company_name',
                    job: '_job_Title',
                    minSalary: '_min_salary',
                    maxSalary: '_max_salary'
                })
                .leftJoin('_company_info', '_company_info._id','_job_postings._company_id')

            return { jobs : result }
            
        } catch (error) {
            console.log(error)
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