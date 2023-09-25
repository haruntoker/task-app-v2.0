const express = require ('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const tasks = require('./routes/tasks.js')

const app = express()

//middlewares
app.use(bodyParser.json())
app.use(express.json())



//home route
app.get('/hello', (req,res)=>{
    res.status(200).send('Task Manager App')
})

//base routes
app.use('/api/v1/tasks', tasks)




/**
 * app.get("/api/v1/tasks")        -> get all the tasks
 * app.post("/api/v1/tasks")       -> create new task
 * app.get("/api/v1/tasks/:id")    -> get single task
 * app.pach("/api/v1/tasks/:id")   -> update task
 * app.delete("/api/v1/tasks/:id") -> delete task
 */







//PORT + mongoDB URI + .env
dotenv.config()
const PORT = process.env.PORT || 3005
const MONGOURI = process.env.MONGO_URI;



// PORT & mongoDB Connection!
const connect = async ()=>{
    try {
        await mongoose.connect(MONGOURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true 
        })
        console.log('Successfully connected to MongoDB!');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
         
    } catch (error) {
        console.log(error);
    }
}

connect()




//PORT - DB Connection - ALTERNATIVE
// mongoose.connect(MONGOURI, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true 
// })
//   .then(() => {
//     console.log('DB connected successfully!');
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => console.error(err));





