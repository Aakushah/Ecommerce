import React from 'react'

const Shipping = () => {
  return (
    <div className='shipping'>
     

     <div className='wrapper'>
        <h1>Shipping address</h1>
        <form>
          <input type="text" placeholder='Address' />
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
          <select id="dropdown">
          <option value="null">Choose Country</option>
          <option value="America">America</option>
          <option value="India">India</option>
          <option value="Nepal">Nepal</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="United Kingdom">United Kingdom</option>
                  
          </select>
          <input type="text" placeholder='Pincode' />

          <button>PAY NOW</button>
        </form>

     </div>

    </div>
  )
}

export default Shipping