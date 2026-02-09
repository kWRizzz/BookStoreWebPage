const mongoose=require('mongoose')


const userSchema= mongoose.Schema(
    {
        userName:{
            type:String,
            required:true
        },
        userEmail:{
            type:String,
            unique:true,
            required:true
        },
        userPassword:{
            type:String,
            required:true
        },
        userProfile:{
            type:String,
            default:""
        }
    },
    {
        timestamps:{
            type:Date,
            default:Date.now()
        }
    }
)

module.exports=mongoose.model("user",userSchema)