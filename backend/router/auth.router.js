const express=require('express')
const userController=require('../controller/auth.controller')

const router=express.Router()

router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)


module.exports=router