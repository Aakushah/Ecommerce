import dotenv from 'dotenv'
import cors from 'cors'
import express,{urlencoded} from "express";
import connectDB from './Database/db.js';
import cookieParser from "cookie-parser";



dotenv.config({
  path: './.env',
})



// routes import
import userRoute from './routes/User.js';
import productRoutes from './routes/Products.js'


//create a server
const app = express();

// Adding middleware for CORS, JSON parsing, and cookies

// app.use(
//   cors({
//     origin:'http://localhost:5173',
//     credentials: true,
//   })
// );

app.use(cors());

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());








//establish connection to db

connectDB().then(() =>{
  app.listen(process.env.PORT || 4000, (req,res) =>{
    console.log(`Server listening on port ${process.env.PORT}`);
  })
})
.catch((error) =>{
  console.log("Mongodb connection failed: " + error);
})



//checking purpose
app.get('/',(req,res) =>{

   res.status(200).json({
            success:true,
            message:`Welcome ,To Home page`,

  })
  console.log(`halo`);

})




// using routes
app.use('/api/v1/user',userRoute);


app.use('/api/v1/products',productRoutes);





//error handler middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status (statusCode).json ({
  success: 0,
  message: err.message,
  stack: err.stack
  })
})





