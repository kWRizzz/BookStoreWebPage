const userModel = require('../model/user.model');
const comparePassword = require('../utils/comparePassword');
const HashPassword = require('../utils/hashing');
const generateToken = require('../utils/tokenGenration');


const userRegister = async (req, res) => {
    try {
        const { userName, userEmail, userPassword } = req.body;
        if(!userName || !userEmail || !userPassword) return res.status(400).json({
            message:"Enter All Credentials"
        })

        const isExist= await userModel.findOne({
            userEmail
        })
        if(isExist) return res.status(400).json({
            message:"User Already Exist"
        })

        const hashPassword= await HashPassword(userPassword)

        const user= await userModel.create({
            userName:userName,
            userEmail:userEmail,
            userPassword:hashPassword
        })

        const token = generateToken(user._id);

        res.cookie("token",token)

        res.status(400).json({
            message:"User Created",
            user:{
                userID:user._id,
                userName:user.userName,
                userEmail:user.userEmail,
                userPassword:hashPassword
            }
        })


    } catch (error) {
        console.log(`Some error Occured while Registering ${error}`);
        res.status(200).json({
            message: `SOme error Occured while creating the user ${error.message}`,
        })
    }
}


const userLogin= async (req,res) => {
    try {
        const {userEmail,userPassword}=req.body

        if(!userEmail || !userPassword) return res.status(200).json({
            message:"Enter All Credentials"
        })

        const user= await userModel.findOne({
            userEmail
        })

        if(!user) return res.status(200).json({
            message:"User Not Exist"
        })

        const isCorrectPasssword= await comparePassword(userPassword,user.userPassword)

        if(!isCorrectPasssword) return res.status(200).json({
            message:"Entered Password Is Incorrect"
        })

        res.status(200).json({
            user:{
                name:user.userName,
                email:user.userEmail,
                password:user.userPassword
            }
        })

    } catch (error) {
        console.log(`Error Has Occured While Loggin In ${error}`);
        res.status(401).json({
            message:"Error In Loggin"
        })
    }
}


module.exports={
    userRegister,
    userLogin
}