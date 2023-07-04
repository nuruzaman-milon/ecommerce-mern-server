const { successResponse, errorResponse } = require('../helpers/response');
const UserModel = require('../models/userModel');
const { FindItemById } = require('../services/findItemById');
const user = require('../user');

const getAllUser = async(req,res)=>{
    try {
        const search = req.query.search || ''; //get search query data
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 2;
        const searchRegEx = new RegExp('.*'+search+'.*','i'); //match search data with regular expression
        const filter = {
            isAdmin: {$ne: true},
            $or:[
                //search with this field
                {name: {$regex: searchRegEx}},
                {email: {$regex: searchRegEx}},
                {phone: {$regex: searchRegEx}},
                {address: {$regex: searchRegEx}},
            ]
        }
        const options = {password:0};

        const users = await UserModel.find(filter,options).limit(limit).skip((page-1) * limit);
        if (users.length === 0) {
            return errorResponse(res, 404, "Users not found");
        }
        const count = await UserModel.find(filter).count();

        return successResponse(res, {statusCode:201, message:"users returned successfully"}, 
        {
            pagination:{
                totalPages:Math.ceil(count/limit),
                currentPage: page,
                previousPage: (page-1) > 0 ? (page-1) : null,
                nextPage: (page+1) <= Math.ceil(count/limit) ? (page+1) : null
            },
            users
        })
    } catch (error) {
        console.error("user not found",error);
    }
}


const getSingleUser = async(req,res) =>{
    const id = req.params.id;
    FindItemById(id, res, UserModel, "User"); // use service to find any item by its id
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




module.exports = {getAllUser, getSingleUser, createAllUserToDb}