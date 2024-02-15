import React, { useState } from 'react'

import { Link } from 'react-router-dom' 

import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";








const Header = () => {

  const user={_id:"hjh",role:'admin'};
  
  const [isOpen,setIsOpen]=useState(false);

  const logoutHandler = () =>{
    setIsOpen(false);
  }



  return (
    <nav className='header'>
        <Link onClick={() => setIsOpen(false)} to={'/'}>Home</Link>
        <Link onClick={() => setIsOpen(false)} to={'/search'}><FaSearch /></Link>
        <Link onClick={() => setIsOpen(false)} to={'/cart'}><FaShoppingCart /></Link>
        
        {
            user?._id ? 

            (
              <>
                <button onClick={() => setIsOpen(prev => !prev)}>
                  <FaUser /> 
                </button>

                <dialog open={isOpen}>

                  {
                    ( user.role === 'admin' ) && ( <Link to={'/admin'}> Admin </Link> ) 
                    
                  }
                <Link to={'/orders'}> Order </Link>
                <button onClick={logoutHandler}><FaSignOutAlt /></button>


                </dialog>
              
              </>

            )
            :
            
            (<Link onClick={() => setIsOpen(false)} to={'/login'}> < FaSignInAlt /> </Link>)
        }

        
          

        

       


    </nav>
  )
}

export default Header