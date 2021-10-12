//require mongoose
const mongoose=require('mongoose');
const router = require('../routes/users');
 //require Schema from mongoose 
 const Schema= mongoose.Schema;
 //create the user schema

 const userSchema=Schema({
     name:{
         type:String,
         required:true
     },
     lastName:{
         type:String,
         required:true
     },
     email:{
         type:String,
         required:true,
         unique:true
     },
     password:{
         type:String,
         required:true
     }
 })

 module.exports=User=mongoose.model('User',userSchema)
//create the shema 
//creat ethe model 
//export the model 