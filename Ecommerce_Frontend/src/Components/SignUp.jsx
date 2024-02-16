import React,{useEffect, useState} from 'react'

import { FcGoogle } from "react-icons/fc";
import { FaApple, FaChessKing } from "react-icons/fa";

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Loading from './Loading/Loading';

import { toast } from 'react-toastify';


const SignUp = () => {

    const [firstname ,setFirstname] = useState('');
    const [lastname ,setLastname] = useState('');
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');

    const [loading,setLoading]=useState(false);

    const navigate=useNavigate();

    const handleRegister = async (e) => {

      e.preventDefault();
    
      const data = {
        firstname,
        lastname,
        email,
        password,
      };


      setLoading(true);

      try {
        const response = await axios.post('http://localhost:4000/api/v1/user/register',data);

        toast.success(response.data.message);

        navigate('/')

      } catch (error) {
       
        

        toast.warning(error.response.data.message);
  
      }

      setLoading(false);
      setFirstname('');
      setLastname('');
      setEmail('');
      setPassword('');


    };
    
    
  return (
    <>
    
    {
      loading ? (<Loading/>) : (    <div className='signup'>
     

      <div className='wrapper'>

         
        
         
         <h1>Sign up</h1>
         <form onSubmit={handleRegister}>
  
          
           <input type="text" placeholder='First name' value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
           
           <input type="text" placeholder='Last name' value={lastname} onChange={(e)=> setLastname(e.target.value) } />
  
           <input type="email" placeholder='Email address' value={email} onChange={(e)=> setEmail(e.target.value) } />
  
           <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value) } />
           
           
  
           <button>Join us !!</button>
  
           <h4 className="dashed-text">Or</h4>
  
           
  
  
         </form>
  
        {/* <button> <FcGoogle className="fc-google" /> Sign Up with Google</button>
  
        <button> <FaApple className="fa-apple" /> Sign Up with Apple</button> */}
  
  
      </div>
  
     </div>)
    }
    
    
    </>


  )
}

export default SignUp