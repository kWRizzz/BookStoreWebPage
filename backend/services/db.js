const mongoose=require('mongoose')

const connectDB= async ()=>{
    try {
        const connet= await mongoose.connect(process.env.MONGODB)
        console.log(`Server Has Been Connected ${connet.connection.host}`)
    } catch (error) {
        console.log("Error while Connecting Server" + error);
        // return exit(1)
    }
}

module.exports=connectDB