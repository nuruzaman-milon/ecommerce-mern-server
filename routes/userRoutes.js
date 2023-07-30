const express = require("express");
const {
  getAllUser,
  createAllUserToDb,
  getSingleUser,
  deleteUser,
  processRegister,
} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.get("/:id", getSingleUser);
userRouter.delete("/:id", deleteUser);
userRouter.get("/create", createAllUserToDb);

userRouter.post("/process-register", processRegister);

module.exports = userRouter;
