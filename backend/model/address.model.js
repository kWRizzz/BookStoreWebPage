const mongoose=require('mongoose')


const addressSchema= mongoose.Schema(
    {
        address_line:{
            type:String
        },
        city:{
            type:String
        },
        state:{
            type:String
        },
        pincode:{
            type:String
        },
        country:{
            type:String
        },
        mobile:{
            type:Number,
            default:null
        },
        status:{
            type:Boolean,
            default:true
        },
        userID:{
            type:mongoose.Schema.ObjectId,
            default:""
        }

    },
    {
        timestamps:true
    }
)

module.exports=mongoose.model("address",addressSchema)