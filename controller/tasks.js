const bodyParser = require("body-parser")

//1
const getAllTasks =  (req,res)=>{
    res.status(200).send("Get all tasks.")
}


//2
const createTask =  (req,res)=>{
    res.json(req.body)
}


//3
const getSingleTask =  (req,res)=>{
    res.json({id:req.params.id})
}


//4
const updateTask =  (req,res)=>{
    res.status(200).send("Update task.")
}


//5
const deleteTask =  (req,res)=>{
    res.status(200).send("Delete task.")
}


//EXPORT to "routes/tasks.js"
module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}