const express = require("express");
const { getAllUser, createAllUserToDb, getSingleUser, deleteUser } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/",getAllUser)
userRouter.get("/:id", getSingleUser)
userRouter.delete("/:id", deleteUser)
userRouter.get("/create",createAllUserToDb)

module.exports = userRouter;