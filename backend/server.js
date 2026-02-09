const express=require('express')
const cookieparser=require('cookie-parser')
const dotenv=require('dotenv')
const authRouter=require('./router/auth.router')
const connectDB=require('./services/db')

dotenv.config()
connectDB()

const app=express()
const PORT=process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use(cookieparser())
app.use('/user/api',authRouter)

app.listen(PORT,()=>{
    console.log(` server http://localhost:3000/`)
})

