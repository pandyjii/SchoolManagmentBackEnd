
const mongoose=require('mongoose')

const AddProductSchema=new mongoose.Schema({
    Name:{type:String, required:[true,'This is required']},
    gender:{type:String,required:[true,'This is required']},
    price:{type:String,required:[true,'This is required']},
    subject:{type:String,required:[true,'This is required feild']},
    thumbnail:{type:String,required:[true,'This is required feild']},
   
})

exports.TeacherModel=mongoose.model('TeacherModel',AddProductSchema);