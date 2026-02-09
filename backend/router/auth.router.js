const express=require('express')
const userController=require('../controller/auth.controller')

const router=express.Router()

router.post('/register',userController.userRegister)

module.exports=router