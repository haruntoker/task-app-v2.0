const mongoose = require ('mongoose')


//schema 1
const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "You must enter a name!"],
        trim:true,
        maxlength: [20, "name connot be 20 charachters."]
    },
    complated:{
        type:Boolean,
        default: false,
    },
    dueDate:{
        type: Date,
        default: Date.now
    }

    
})

   

//export to controller/task.js
const Task = mongoose.model('Task', TaskSchema);

module.exports = { Task };


//assigne to controller at the controller/task.js

