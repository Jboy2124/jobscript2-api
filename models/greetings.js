module.exports = {
    greet(){
        try {
            return 'Hello, this is from backend!'
        } catch (error) {
            console.log(error)
        }
    }
}