const express = require("express");
const { getAllUser, createAllUserToDb } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/",getAllUser)
userRouter.get("/create",createAllUserToDb)

module.exports = userRouter;