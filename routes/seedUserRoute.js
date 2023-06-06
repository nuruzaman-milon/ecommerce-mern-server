const express = require("express");
const seedUserController = require("../controllers/seedUserController");
const seedUserRouter = express.Router();

seedUserRouter.get("/user",seedUserController)

module.exports = seedUserRouter;