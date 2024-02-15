import React, { useState } from 'react'

import {Link} from 'react-router-dom'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Loading from './Loading/Loading';

import { toast } from 'react-toastify';



const Login = () => {

  const [email ,setEmail] = useState('');
  const [password ,setPassword] = useState('');

  const [loading,setLoading]=useState(false);

  const navigate=useNavigate();



  const handleLogin = async(e) =>{

    e.preventDefault();

    const data = {
      email,
      password,
    };

    setLoading(true);
      try {

        
        const response = await axios.post('http://localhost:4000/api/v1/user/login',data);

        toast.success(response.data.message);

        
        navigate('/');

      } catch (error) {

        toast.warning(error.response.data.message);
  
      }

      setLoading(false);
      setEmail('');
      setPassword('');


  } 

  return (
    <>
    {
      loading ? (<Loading />) 
      : 
      (
        <div className='login'>
     

        <div className='wrapper'>
           <h1>Loign</h1>
           <form>
    
             <label>Email:</label>
             <input type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
             <label>Password:</label>
             <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value) } />
             
             
    
             <button onClick={handleLogin}>Login</button>
    
             
           </form>
    
    
           <p>Forget Password? <span>or</span> <Link to={'/signup'} >Sign Up</Link></p>
    
        </div>
    
       </div>
      )
    }
    
    </>
  )
}

export default Login