import express from 'express';


const router=express.Router();

import { verifyJwt } from '../middlewares/auth.js';
import  {newUser,registerUser,loginUser,logoutUser,refreshAccessToken} from '../controllers/User.js'





router.route('/newUser').post(newUser);


router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

//secured routes

router.route('/logout').post(verifyJwt,logoutUser);

router.route('/refresh-token').post(refreshAccessToken);


// router.route('/userLogin').post(newUserLogin);






export default router;