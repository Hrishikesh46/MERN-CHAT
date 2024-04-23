import jwt from 'jsonwebtoken'
import User from '../Models/user.model.js'

const protectedRoute =async (req,res,next)=>{
    try {
        const token = req.cookies.jwt
        if(!token) {
            return res.status(401).json({error: "Unauthorized - No token provided"})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded){
            return res.status(401).json({error: "Unauthorized - Invalid token"})

        }
        console.log(decoded)
        const user = await User.findById(decoded.userID).select('-password')

        if(!user) {
            return res.status(401).json({error: "Unauthorized - User not found"})

        }

        req.user = user
        next()

    } catch (error) {
        console.log("Error in protectedRoute middleware: ", error.message)
        res.status(500).json({error:"Internal server error"})
    }
}

export default protectedRoute