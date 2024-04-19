export const signup = async(req,res)=>{
    try{
        const {fullname, username, password, confirmPassword, gender} = req.body
        res.send('signup user')
        console.log('signup User')
    }catch{}
}

export const login = (req,res)=>{
    res.send('login user')
    console.log('login User')
}

export const logout = (req,res)=>{
    res.send('logout user')

    console.log('logout User')
}