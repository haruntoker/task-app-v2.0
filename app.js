const express = require ('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const tasks = require('./routes/tasks.js')
const notFound = require("./middleware/not-found.js")
const errorHandlerMW = require('./middleware/error-handler.js')

const app = express()

//middlewares
app.use(bodyParser.json())
app.use(express.json())
app.use(express.static('./public'))


//home route
// app.get('/hello', (req,res)=>{
//     res.status(200).send('Task Manager App')
// })

//all routes
app.use('/api/v1/tasks', tasks)


//notFound middleware;
app.use(notFound)
//error handler middleware;
app.use(errorHandlerMW)






// 1- PORT + mongoDB URI + .env
dotenv.config();
const PORT = process.env.PORT || 4000;
const MONGOURI = process.env.MONGO_URI;



// 2- PORT & mongoDB Connection!
const connect = async ()=>{
    try {
        await mongoose.connect(MONGOURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true ,
            useFindAndModify: false
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





 