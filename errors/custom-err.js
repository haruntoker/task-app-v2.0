
class apiErr extends Error {
    constructor (message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}


const customErr = (msg, statusCode) => {
    return new apiErr(msg, statusCode)
}


module.exports = { apiErr, customErr}