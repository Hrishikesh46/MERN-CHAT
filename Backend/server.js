import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './Routes/auth.routes.js'
import connectToMongoDB from './DB/connecttoMongoDB.js'

// Variables
const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

//Middlewares
app.use(express.json()) // to parse the incoming requests with json payloads
app.use('/api/auth', authRoutes)

// Test routes
// app.get('/',(req,res)=>{
//     res.send('Hello world')
// })


app.listen(PORT, ()=> {
    connectToMongoDB()
    console.log(`Server running on port ${PORT}`) 
})              