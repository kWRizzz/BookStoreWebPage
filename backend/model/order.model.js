const mongoose= require('mongoose')


const orderSchema= mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    orderID:{
        type:String,
        required:true,
        unique:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    },
    productDetail:{
        name:String,
        image:Array
    },
    paymentID:{
        type:String,
        default:""
    },
    paymentStatus:{
        type:String,
        default:""
    },
    dileveryAddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"address"
    },
    subTotalAmount:{
        type:Number,
        default:0
    },
    totalAmount:{
        type:Number,
        default:0
    },
    invoice:{
        type:String,
        default:""
    }
    
},
{
    timestamps:true
}

)

module.exports=mongoose.model("order",orderSchema)