const mongoose = require('mongoose')

const cartSchema= mongoose.Schema({
    productID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
    quantity:{
        type:Number,
        default:null
    },
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
},
{
    timestamps:true
}
)

module.exports=mongoose.model("cart",cartSchema)

