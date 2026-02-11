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
        avatar:{
            type:String,
            default:""
        },
        mobile:{
            type:Number
        },
        refreshToken:{
            type:String,
            default:""
        },
        verify_email:{
            type:Boolean,
            default:false
        },
        last_login:{
            type:Date,
            default:""
        },
        status:{
            type:String,
            enum:["Active","Inactive","Suspended"],
            default:"Active"
        },
        address_details:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"adress"
            }
        ],
        shoppingCart:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"cartProduct"
            }
        ],
        orderHistory:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"order"
            }
        ],
        forgotPassword:{
            type:String,
            default:null
        },
        forgotPasswordExpiry:{
            type:Date,
            default:""
        },
        role:{
            type:String,
            enum:["ADMIN","USER"],
            default:"USER"
        },
       

    },
    {   
        
        timestamps:{
            type:Date,
            default:Date.now()
        }
    }
)

module.exports=mongoose.model("user",userSchema)