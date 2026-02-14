const mongoose= require('mongoose')


const categorySchema= mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:String,
        default:""
    }
},
{
    timestamps:true
})