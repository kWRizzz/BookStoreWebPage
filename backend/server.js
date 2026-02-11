const express=require('express')
const cookieparser=require('cookie-parser')
const dotenv=require('dotenv')
const authRouter=require('./router/auth.router')
const connectDB=require('./services/db')
const cors= require('cors')
const morgan=require('morgan')
const helmet=require('helmet')

dotenv.config()
connectDB()

const app=express()
const PORT=process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use(cors({
    credentials:true,
    // origin:process.env.FRONTEND_URL
}))
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy:false
}))
app.use(cookieparser())
app.use('/user/api',authRouter)

app.listen(PORT,()=>{
    console.log(` server http://localhost:3000/`)
})

