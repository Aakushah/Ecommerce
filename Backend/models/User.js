import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt  from "jsonwebtoken";
// import validator from "validator";


const userSchema= mongoose.Schema({

    firstname:{
        type:String,
        required:[true,"firstname is required"],
    },
    lastname:{
        type:String,
        required:[true,"lastname is required"],
    },
    photo:{
        type:String,
        default:"",
        
    },
    gender:{
        type:String,
        default:"",
    },
    role:{
        type:String,
        enum:["admin", "user"],
        default:"user",
    },
    email:{
        type:String,
        unique:[true,"email already in use"],
        required:[true,"email is required"],

    },
    dob:{
        type:Date,
        default:'',

    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    refreshToken:{
        type:String,
    }

},{
    timestamps: true
});


// Middleware to hash the password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
  
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });

// Method to check if the entered password is correct
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  // Method to generate an access token
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
      {
        _id: this._id,
        email: this.email,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      }
    );
  };

  // Method to generate a refresh token
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
      {
        _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY ,
      }
    );
  };
  


//create a virtual schema

// UserSchema.virtual('age').get(function (){
//     const today=new Date();
//     const dob=this.dob;

//     let age=today.getFullYear() - dob.getFullYear();
//     if(today.getMonth() < dob.getMonth()  || today.getMonth() === dob.getMonth() && today.getDay() < dob.getDay()  ) age-- ;

//     return age;
// })



export  const User = mongoose.model('User',userSchema);


export default User;