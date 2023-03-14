const mongoose = require('mongoose');

mongoose.set('strictQuery', false)
const mongoURI = "mongodb://127.0.0.1:27017/CRUD_operation";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,{
        useNewUrlParser: true,
        useUnifiedTopology: false
    }).then(()=>{
            console.log("Connected to Mongo Successfully");
    }).catch(e=>console.log(e))
}

module.exports = connectToMongo;