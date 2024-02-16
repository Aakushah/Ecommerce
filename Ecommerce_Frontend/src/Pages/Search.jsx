import React, { useEffect, useState } from 'react'

import Pagination from '../Components/Pagination/Pagination';

import axios from "axios";

const Search = () => {


  const [posts, setPosts] = useState([]);

  const [search,setSearch]= useState('');
  const [sort,setSort]= useState('None');
  const [maxPrice,setMaxPrice]= useState(100);
  const [category,setCategory]= useState('All');
  const [length,setLength] = useState(0);
  const [page,setPage]=useState(0);




  console.log(search,sort,maxPrice,category);



  useEffect(() => {

		const getAllProducts = async () => {
      console.log('hello');
			try {
				const url = `http://localhost:4000/api/v1/products/?&search=${search}&category=${category}&maxPrice=${maxPrice}&sort=${sort}`;


				const { data } = await axios.get(url);

        setPosts(data.products);

        console.log(data.products);
        setLength(data.products.length);
        console.log(data.products.length);
				
			} catch (err) {
				console.log("error",err);
			}
		};

	  getAllProducts();

	}, [search,sort,maxPrice,category]);






  return (
    <div className='search'>
        <aside>
            <h1>Filters</h1>
          <div>
            <h4>Sort:</h4>
            <select value={sort} onChange={ (e) => setSort(e.target.value) } name="price" >
              <option value="None">None</option>
              <option value="asc" >Low to High</option>
              <option value="desc" >High to Low</option>  
            </select>
          </div>

          <div>
            <h4>MaxPrice:{maxPrice || " "}</h4>
            <input type="range"  min={100} max={100000}  value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}/>
          </div>


          <div>
          <h4>Category:</h4>
            <select value={category} onChange={(e) => setCategory(e.target.value) } name="category">
              <option value="All" >All</option>
              <option value= "Electronics" >Electronics</option>
              <option value="Apparel and Fashion" >Apparel & Fashion</option>  
              <option value="Home and Kitchen" >Home & Kitchen</option>  
              <option value="Home and Office Furniture" >Home & Office</option>  
              <option value="Fitness and Wellness" >Fitness & Wellness</option>  
            </select>
          </div>

        </aside>
        <main>
          <h1>Products</h1>
          <input type="text" placeholder='Search by name....' value={search} onChange={ (e) => setSearch(e.target.value)} />
         
            
         
          <div className='pagination'>
            < Pagination posts={posts} length={length}/>
          </div>
        
        
        
            
          
        </main>
    </div>
  )
}

export default Search