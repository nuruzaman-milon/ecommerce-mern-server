const express = require("express");
const { getAllUser, createAllUserToDb, getSingleUser } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/",getAllUser)
userRouter.get("/:id", getSingleUser)
userRouter.get("/create",createAllUserToDb)

module.exports = userRouter;