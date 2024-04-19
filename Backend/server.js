import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/api/auth/signup',(req,res)=>{
    console.log('signup route')
})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))  