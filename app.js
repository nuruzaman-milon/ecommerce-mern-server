const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");


//initialize express app
const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//router
app.use("/api/user",userRouter);

app.get("/",(req,res)=>{
    res.status(200).send("running correctly")
})

module.exports = app;