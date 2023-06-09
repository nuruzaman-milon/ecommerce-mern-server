const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
const seedUserRouter = require("./routes/seedUserRoute");


//initialize express app
const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//router
app.use("/api/user",userRouter);

//user seed router
app.use("/api/seed",seedUserRouter);

app.get("/",(req,res)=>{
    res.status(200).send("running correctly")
})

module.exports = app;