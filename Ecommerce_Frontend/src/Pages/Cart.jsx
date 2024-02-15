import React, { useState,useEffect } from 'react'

import CartItem from '../Components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {


  const cartItemsarray= [
    {
        productId: 1,
        name: "macbook",
        price: 70000,
        stock: true,
        image: "https://picsum.photos/300/200",
        description: "MacBook - Powerful laptop for professionals",
        countOfStock: 10,
        handler: () => {
            console.log("clicked");
        }
    },
    {
        productId: 2,
        name: "iphone",
        price: 1000,
        stock: true,
        image: "https://picsum.photos/300/200",
        description: "iPhone - Latest smartphone with amazing features",
        countOfStock: 20,
        handler: () => {
            console.log("clicked");
        }
    },
    {
        productId: 3,
        name: "samsung",
        price: 800,
        stock: false,
        image: "https://picsum.photos/300/200",
        description: "Samsung - Pro-grade camera with advanced features",
        countOfStock: 5,
        handler: () => {
            console.log("clicked");
        }
    }
  ] ;

  const[couponCode,setCouponCode] = useState("");

  const[isValidCouponCode,setisValidCouponCode] = useState(false);

  useEffect(() =>{
      const timeoutId=setTimeout(() =>{
          if( Math.random() > 0.5){
            setisValidCouponCode(true)
          }  
          else{
            setisValidCouponCode(false); 
          }
         }
        ,2000)
  
    return () => {
      clearTimeout(timeoutId);
      setisValidCouponCode(false); 
    };
    },[couponCode]);

  const product={
    name:'Product Name',
    price:70000,
    shipping_charges:500,
    quantity:1,
    tax:20000,
    discount:1000,
    total:65000,
  }

  


  return (
    <div className='cart'>
      <main>

        {
          
            cartItemsarray.length > 0 ? (cartItemsarray.map((product)=> <CartItem key={product.productId} cartItem={product}/>)
            ) : (<h1>No item added.</h1>)

        }
       
      </main>
      <aside>
        <p>Subtotal:{product.price}</p>
        <p>Shipping Charges:{product.shipping_charges}</p>
        <p>Tax:{product.tax}</p>
        <p>Discount : <em>₹ {product.discount}</em></p>
        <p>Total : ₹ {product.total} </p> 
        

        <input type="text" placeholder='Coupen code'  value={couponCode} onChange={(e) => setCouponCode(e.target.value)}/>
        {
           couponCode && 
           (
              isValidCouponCode 
              ?

              (
                <span className='green'>{`  Coupon code ${couponCode} applied successfully !!`}</span>
              )
                : 
              (
                <span className='red'>{` Coupon code ${couponCode} is not valid !!`}</span>
              )
           )
        }

        {cartItemsarray.length > 0 && <Link to={'/shipping'}>Checkout</Link>}


      </aside>
    </div>
  )
}

export default Cart