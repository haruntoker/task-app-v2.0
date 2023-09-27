const {apiErr} = require('../errors/custom-err')

const errorHandlerMW = (err,req,res,next)=>{
    if(err instanceof apiErr){
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg: `An error accured. `})
}


module.exports = errorHandlerMW


