const express = require('express')
const router = express.Router()

//import from "controller/routes.js"
const {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
} = require ('../controller/tasks')


router.get('/', getAllTasks)
router.post('/', createTask)
router.get('/:id', getSingleTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)



//export to "app.js"
module.exports = router





//FIRST app.js 
//SECOND, build: "routes/tasks.js"
//THIRT, build: "controller/tasks.js"