import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    // Find the user by ID in the database
    const user = await User.findById(userId);

    // Generate an access token and a refresh token
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    // Save the refresh token to the user in the database
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    // Return the generated tokens
    return { accessToken, refreshToken };
  } catch (error) {
    // Handle any errors that occur during the process
    throw new Error(error.message);
  }
};

const refreshAccessToken = async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    return res.status(401).json({ message: "refresh token not found" });
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    console.log(decodedToken);

    // Get the user linked to the token

    const user = await User.findById(decodedToken?._id);

    // If the user isn't found, deny access with a 404 Not Found status

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    if (user?.refreshToken !== incomingRefreshToken) {
      return res.status(401).json({ message: "refresh token is invalid" });
    }

    // Set options for cookies
    const options = {
      httpOnly: true,
      secure: true, // Enable in a production environment with HTTPS
    };

    // Generate new access and refresh tokens for the user
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id
    );

    // Set the new tokens in cookies
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({ accessToken, refreshToken, message: "Access token refreshed" });
  } catch (error) {
    return res.status(500).json({ messagex: error.message });
  }
};

const newUser = async (req, res) => {
  try {
    const { email, role, photo, gender, dob, password } = req.body;

    const user = await User.create({
      email: email,
      role: role,
      photo: photo,
      gender: gender,
      dob: dob,
      password: password,
    });

    // Retrieve the created user excluding sensitive information
    const updatedUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    res.status(200).json({
      success: true,
      user: updatedUser,
      message: "Profile information is updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: `error: , ${error}`,
    });
  }
};

const registerUser = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    if (!firstname || !lastname || !email || !password) {

      throw new ApiError(400,'All fields are required');
      
      
    }

    const existedUser = await User.findOne({ email });

    if (existedUser) {
       throw new ApiError(400,'User already exists');
    }

    

    // Create a new user in the database
    const user = await User.create({ firstname, lastname, email, password });

    // Retrieve the created user excluding sensitive information
    const registerUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );
    
    if (!registerUser) {
      throw new ApiError(500,'Something went wrong during registrating the user');
    }

    return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          {
            user:registerUser,
          },
          "User regisration is sucessfull !!"
        )
      );

  } catch (error) {

    next(error);

  }
};

const loginUser = async (req, res,next) => {
  const {email, password } = req.body;

 

  try {


    if (!email || !password) {

      throw new ApiError(400,'Email and Password is required');
      
    }

    const user = await User.findOne({ email: email });

    //check if user exists
    if (!user) {

      throw new ApiError(400,'User not found');
      
    }

    //verfity the correctness of the provided password

    const isPasswordValid = await user.isPasswordCorrect(password);

    // Handle incorrect password
    if (!isPasswordValid) {
      throw new ApiError(400,'Incorrect password');
      
    }

    // Generate access and refresh tokens
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id
    );

    

    // Retrieve the logged-in user excluding sensitive information
    const loggedInUser = await User.findById(user._id);

    // Set options for cookies
    const options = {
      httpOnly: true,
      secure: true, // Enable in a production environment with HTTPS
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          {
            user: loggedInUser
          },
          "Logged in successfully !!!"
        )
      );
  } catch (error) {
   
    next(error);
  }
};

const logoutUser = async (req, res) => {
  // Remove the refresh token from the user's information
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: undefined },
    },
    {
      new: true,
    }
  );

  // Set options for cookies
  const options = {
    httpOnly: true,
    secure: true, // Enable in a production environment with HTTPS
  };

  return res
    .status(200)
    .cookie("accessToken", options)
    .cookie("refreshToken", options)
    .json({ user: {}, message: "Logged out successfully" });
};

export { newUser, registerUser, loginUser, logoutUser, refreshAccessToken };
