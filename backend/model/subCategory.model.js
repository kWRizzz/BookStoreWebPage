const mongoose =require("mongoose")

const subCategorySchema= mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:String,
        default:""
    },
    categoryID:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"category"
        }
    ]
})


module.exports=mongoose.model("subCategory",subCategorySchema)