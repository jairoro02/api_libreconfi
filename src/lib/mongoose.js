const mongoose = require("mongoose")
require("dotenv").config()

const conectionDB = async () =>{
    console.log("cancelo gay")
    try{
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("conectado a mongoDB")
    }
    catch(error){
        console.log(error)
    }
};
module.exports = conectionDB