const mongoose= require('mongoose')

const productSchema= mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:Array,
        default:[]
    },
    categoryID:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"category"
        }
    ],
    subCategoryID:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"subCategory"
        }
    ],
    unit:{
        type:String,
        def:""
    },
    price:{
        type:Number,
        default:null
    },
    discount:{
        type:Number,
        default:null
    },
    description:{
        type:String,
        default:""
    },
    moreDetails:{
        type:Object,
        default:{}
    },
    publish:{
        type:Boolean,
        default:true
    }


},
{
    timestamps:true
}
)


module.exports=mongoose.model("product",productSchema)