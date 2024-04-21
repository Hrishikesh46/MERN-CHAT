import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName :{
        type : String,
        required: true
    },
    username:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required : true,
        minLenght: 6
    },
    gender :{
        type:String,
        required: true,
        enum : ['male','female']
    },
    profilePic : {
        type: String,
        default: ''
    }
})

const User = mongoose.model('User', userSchema)

export default User
// git config --global user.email "you@example.com"
// git config --global user.name "Your Name"