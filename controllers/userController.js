const User = require('../models/userModel.js')

exports.home = (req, res) => {
    res.send('Hello Welcome!');
}

exports.createUser = async (req, res) => {
    //extract info
    try {
        const { name, email } = req.body;

        //
        if(!name || !email){
            throw new Error("Name and Email are required")
        }

        //User (userSchema) that export from userModel.js 
        // const userExists = User.findOne({email})
        // if(userExists){
        //     throw new Error("User already exists")
        // }

        const user = await User.create({
            // short if name same (es6)
            name, 
            email
            //name: name,
            //email: email
        })

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message, 
        })
}
}

//get all users      //see get data in array  
exports.getUsers = async (req, res) => {
    try{
        const users = await User.find({})    //specific -> ..find({email})
        res.status(200).json({
            success: true,
            // message: "All users data retrieved successfully",
            users
        })
    }catch(error){
        console.log(error);
        res.status(400).json({
            success: false,
            // message: error.message, 
            message: "User data can't retrieved"
        })
    }
}

//update user
exports.updateUser = async (req, res) =>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success: true,
            message: "User updated successfully",
        })
    }catch(error){
        console.log(error);
        res.status(400).json({
            success: false,
            message: "User can't update ,try again!",
        })
    }
}

//delete user
exports.deleteUser = async (req, res) =>{
    try{ 
        //fetch data from body -> req.body 
        //fetch data from url -> req.params
        //fetch user id from url (user that send request) 
        const userId = req.params.id      
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        })
    }catch(error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "Can't delete user data!", 
        })
    }
}