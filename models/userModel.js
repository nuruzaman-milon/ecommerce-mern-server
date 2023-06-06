const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

//default user image
const defaultImagePath = process.env.DEFAULT_USER_IMAGE_PATH || "public/images/users/default_user.png";

//defining schema
const userSchema = new Schema({
    name:{
        type: String,
        required: [true, "name is missing"], //boolean, message
        trim:true, //trim empty space
        minLength:[3,"name must be 3 charaters long"], //number, message
        maxLength:[30,"name must be within 30 charaters long"]
    },
    email:{
        type:String,
        required:[true, "email is missing"],
        trim:true,
        unique:[true, "email already exists"], // value should be unique
        lowercase:true, //value always save in lowercase
        validate:{
            validator:(value) =>{
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value); //return either ture or false based on email address
            },
            message:"please enter a valid email"
        },
    },
    password:{
        type:String,
        required:[true, "password is required"],
        validate:{
            validator:(value) =>{
                return /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(value); //return true or false
            },
            message:"password must be atleast 6 character long with atleast one character and a number"
        },
        // set:(value)=> bcrypt.hashSync(value, bcrypt.genSaltSync(saltRounds))
        set:(value)=> bcrypt.hashSync(value, bcrypt.genSaltSync(10))
    },
    image:{
        type:String,
        default: defaultImagePath,
    },
    address:{
        type:String,
        required:[true,'Address is required']
    },
    phone:{
        type:String,
        required:[true,'phone is required']
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isBanned:{
        type:Boolean,
        default:false
    },

},{timestamps:true});

// defining model 
const UserModel = model('Users',userSchema);
module.exports = UserModel;