import React, { useState } from 'react'

import Pagination from '../Components/Pagination/Pagination';

const Search = () => {

  const [search,setSearch]= useState('');
  const [sort,setSort]= useState('');
  const [maxPrice,setMaxPrice]= useState('');
  const [category,setCategory]= useState('');
  const [page,setPage]=useState('');


  return (
    <div className='search'>
        <aside>
            <h1>Filters</h1>
          <div>
            <h4>Sort:</h4>
            <select value={sort} onChange={ (e) => setSort(e.target.value) } name="options" >
              <option value="option1">None</option>
              <option value="asc" >Low to High</option>
              <option value="dec" >High to Low</option>  
            </select>
          </div>
          <div>
            <h4>MaxPrice:{maxPrice || " "}</h4>
            <input type="range"  min={100} max={100000}  value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}/>
          </div>


          <div>
          <h4>Category:</h4>
            <select value={category} onChange={(e) => setCategory(e.target.value) } name="options">
              <option value="option1" >All</option>
              <option value="Electronics" >Electronics</option>
              <option value="Cosmetics" >Cosmetics</option>  
              <option value="Furniture" >Furniture</option>  
            </select>
          </div>

        </aside>
        <main>
          <h1>Products</h1>
          <input type="text" placeholder='Search by name....' />
         
            
         
          <div className='pagination'>
            < Pagination />
          </div>
        
        
        
            
          
        </main>
    </div>
  )
}

export default Search