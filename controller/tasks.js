const { Task } = require('../schemas/Task.js');

// 1 Get all Tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// 2 Create task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// 3 Get single task
const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params; 
    const task = await Task.findOne({ _id: taskID }); 

    if (!task) {
      return res.status(404).json({ msg: `There is no task with ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// 4 Update Task
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params; 
    const updateData = req.body; 

    
    const updatedTask = await Task.findOneAndUpdate({ _id: taskID }, updateData, {
      new: true, 
      runValidators: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ msg: `Task with id: ${taskID} not found!` });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// 5 Delete Task
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params; 
    const result = await Task.deleteOne({ _id: taskID }); 

    if (result.deletedCount === 0) {
      return res.status(404).json({ msg: `Task with the id: ${taskID} is not found!` });
    }

    res.status(200).json({ msg: `Task with the id ${taskID} successfully deleted!!` });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// EXPORT to "routes/tasks.js"
module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
