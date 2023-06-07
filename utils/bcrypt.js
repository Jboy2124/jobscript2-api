const bcrypt = require('bcrypt')

module.exports = {
    async hash(password){
        try {
            
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            return hashedPassword

        } catch (error) {
            console.log(error)
        }
    },

    async verify(inputPassword, hashedPassword){
        try {
            const isMatch = await bcrypt.compare(inputPassword, hashedPassword)
            return isMatch;
        } catch (error) {
            console.log(error)
        }
    }
}