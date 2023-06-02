const knex = require('../config/knex')

module.exports = {
    greet(){
        try {
            return 'Hello, this is from backend!'
        } catch (error) {
            console.log(error)
        }
    },

    async list(){
        try {
            const result = await knex('_login_account')
                .select({
                    id: '_id',
                    email: '_email',
                    password: '_password'
                })
            return { users: result }
        } catch (error) {
            console.log(error)
        }
    }
}