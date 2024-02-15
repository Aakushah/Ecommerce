import React from 'react'
import {Link } from 'react-router-dom'
import Products from '../Products'

const Home = () => {
  return (
    <div className='home'>

      <section></section>

      <h1 className='heading'> 

        Latest Products

        <Link to={'/search'} className="findmore">
          Show more
        </Link>
        
      </h1>
       
      <Products />
     
    </div>
  )
}

export default Home