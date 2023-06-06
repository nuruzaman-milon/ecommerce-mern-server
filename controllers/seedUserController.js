const UserModel = require("../models/userModel");
const User = require("../user");

const seedUserController = async(req,res)=>{
    try {
        await UserModel.deleteMany({});
        const users = await UserModel.insertMany(User);
        if (users) {
            return res.status(201).json(users);
        } 
    } catch (error) {
        console.error(error);
    }

}

module.exports = seedUserController;