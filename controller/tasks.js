const { Task } = require('../schemas/Task.js');
const asyncWrapper = require('../middleware/async.js')
const {apiErr, customErr} = require('../errors/custom-err.js')


// 1 Get all Tasks
const getAllTasks =  asyncWrapper( async (req, res) => {
  
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  
});


// 2 Create task
const createTask =asyncWrapper( async (req, res) => {
  
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  
});


// 3 Get single task
const getSingleTask = asyncWrapper(async (req, res, next) => {
  
    const { id: taskID } = req.params; 
    const task = await Task.findOne({ _id: taskID }); 

    if (!task) {
      //custom build error handler =>
     return next(customErr({ msg: `There is no task with ${taskID}`},404))
    }

    res.status(200).json({ task });
 
});


// 4 Update Task
const updateTask = asyncWrapper( async (req, res) => {
  
    const { id: taskID } = req.params;
   
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true });

    if (!task) {
      return next(customErr({ msg: `There is no task with ${taskID}`},404))
    }
    
    res.status(200).json({ msg: `Task successfully updated.` });

  
});




// 5 Delete Task
const deleteTask = asyncWrapper( async (req, res) => {
  
    const { id: taskID } = req.params; 
    const result = await Task.deleteOne({ _id: taskID }); 

    if (result.deletedCount === 0) {
      return next(customErr({ msg: `There is no task with ${taskID}`},404))
    }

    res.status(200).json({ msg: `Task with the id ${taskID} successfully deleted!!` });
  
});

// EXPORT to "routes/tasks.js"
module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
  
};
