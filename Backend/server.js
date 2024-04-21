import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './Routes/auth.routes.js'
import connectToMongoDB from './DB/connecttoMongoDB.js'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.use('/api/auth', authRoutes)

app.listen(PORT, ()=> {
    connectToMongoDB()
    console.log(`Server running on port ${PORT}`) 
})              