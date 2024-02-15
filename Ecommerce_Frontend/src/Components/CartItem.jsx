import React from 'react'

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const CartItem = ({cartItem}) => {

  console.log(cartItem);
  return (

    
    <div className='cartItem'>
      
     <div className='left'>

        <img src={cartItem.image} alt="" />

        <div className='details'>
            <p>{cartItem.name}</p>
            <p>{cartItem.description}</p>
            <span>{` ₹ ${cartItem.price} `}</span>
        </div>

     </div>

     <div className='right'>

        <div className='controllers'>
          <button><FaMinus /></button>
          <span>3</span>
          <button><FaPlus /></button>
        </div>

        <button><MdDelete /></button>

     </div>


    </div>
  )
}

export default CartItem