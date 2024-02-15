import React from 'react'
import { FaPlus } from "react-icons/fa";

const Product_Card = ({item}) => {

  
  return (
    <div className='product_card'>

        <img src={`${item.image}`} alt="" />
        <p>{item.name}</p>
        <span>₹{item.price}</span>

        <div onClick={item.handler}>
            <button><FaPlus /></button>
        </div>

    </div>
  )
}

export default Product_Card