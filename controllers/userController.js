const { successResponse, errorResponse } = require('../helpers/response');
const UserModel = require('../models/userModel');
const User = require('../user');
const user = require('../user');

const getAllUser = async(req,res)=>{
    try {
        const users = await UserModel.find({});
        return successResponse(res, {statusCode:201, message:"users returned successfully"}, users)
    } catch (error) {
        return errorResponse(res, {statusCode:error.status, message: error.message})
    }
}


const createAllUserToDb = async(req,res)=>{
    try {
        const userData = user;
        await UserModel.insertMany(userData);
        res.status(201).send({
            message:"users created successfully",
            userData
        })
    } catch (error) {
        console.error(error);
    }
}




module.exports = {getAllUser,createAllUserToDb}