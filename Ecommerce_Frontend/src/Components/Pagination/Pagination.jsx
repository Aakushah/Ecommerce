import React, { useState } from 'react'
import Product_Card from '../Product_Card.jsx'
import PaginationScrlBtn from './PaginationScrlBtn.jsx'

const Pagination = () => {

    const[posts,setPosts]=useState([
        {
            productId: 1,
            name: "Laptop",
            price: 80000,
            stock: true,
            image: "https://picsum.photos/300/200",
            description: "Laptop - Powerful device for professionals",
            countOfStock: 10,
            
        },
        
        {
            productId: 2,
            name: "Digital Camera",
            price: 600,
            stock: true,
            image: "https://picsum.photos/300/200",
            description: "Digital Camera - High-quality photography gear",
            countOfStock: 15,
            
        },
        {
            productId: 3,
            name: "Smart Fitness Tracker",
            price: 250,
            stock: false,
            image: "https://picsum.photos/300/200",
            description: "Smart Fitness Tracker - Stay connected on the go",
            countOfStock: 5,
            
        },
        {
            productId: 4,
            name: "Wireless Earbuds",
            price: 120,
            stock: true,
            image: "https://picsum.photos/300/200",
            description: "Wireless Earbuds - Immersive audio experience",
            countOfStock: 8,
            
        },
        // Additional items
        {
            productId: 5,
            name: "Gaming Laptop",
            price: 120000,
            stock: true,
            image: "https://picsum.photos/300/200",
            description: "Gaming Laptop - Ultimate gaming performance",
            countOfStock: 7,
            
        },
        {
            productId: 6,
            name: "4K UHD TV",
            price: 1500,
            stock: true,
            image: "https://picsum.photos/300/200",
            description: "4K UHD TV - Crystal-clear visuals for your entertainment",
            countOfStock: 12,
            
        },
        {
            productId: 7,
            name: "Wireless Gaming Mouse",
            price: 80,
            stock: false,
            image: "https://picsum.photos/300/200",
            description: "Wireless Gaming Mouse - Precision for gaming enthusiasts",
            countOfStock: 3,
            
        },
        {
            productId: 8,
            name: "External SSD Drive",
            price: 200,
            stock: true,
            image: "https://picsum.photos/300/200",
            description: "External SSD Drive - Fast and portable storage solution",
            countOfStock: 20,
            
        },
        {
            productId: 9,
            name: "Smart Home Security Camera",
            price: 150,
            stock: true,
            image: "https://picsum.photos/300/200",
            description: "Smart Home Security Camera - Monitor your home remotely",
            countOfStock: 6,
            
        },
        {
            productId: 10,
            name: "Bluetooth Speaker",
            price: 50,
            stock: true,
            image: "https://picsum.photos/300/200",
            description: "Bluetooth Speaker - Enjoy music on the go",
            countOfStock: 15,
            
        },
        {
            productId: 11,
            name: "Wireless Charging Pad",
            price: 30,
            stock: false,
            image: "https://picsum.photos/300/200",
            description: "Wireless Charging Pad - Convenient charging solution",
            countOfStock: 4,
            
        },
        {
            productId: 12,
            name: "Ultra-wide Monitor",
            price: 800,
            stock: true,
            image: "https://picsum.photos/300/200",
            description: "Ultra-wide Monitor - Expand your viewing experience",
            countOfStock: 10,
            
        },
        {
            productId: 13,
            name: "Portable Blender",
            price: 40,
            stock: true,
            image: "https://picsum.photos/300/200",
            description: "Portable Blender - Blend your favorite drinks anywhere",
            countOfStock: 18,
            
        },
        {
            productId: 14,
            name: "Smart Thermostat",
            price: 120,
            stock: false,
            image: "https://picsum.photos/300/200",
            description: "Smart Thermostat - Control your home's temperature remotely",
            countOfStock: 2,
            
        },
        {
            productId: 15,
            name: "Noise-canceling Headphones",
            price: 150,
            stock: true,
            image: "https://picsum.photos/300/200",
            description: "Noise-canceling Headphones - Immerse yourself in music",
            countOfStock: 10,
            
        },
        {
            productId: 16,
            name: "Fitness Smartwatch",
            price: 180,
            stock: true,
            image: "https://picsum.photos/300/200",
            description: "Fitness Smartwatch - Track your health and workouts",
            countOfStock: 7,
            
        },
        {
            productId: 17,
            name: "Wireless Gaming Keyboard",
            price: 100,
            stock: false,
            image: "https://picsum.photos/300/200",
            description: "Wireless Gaming Keyboard - Responsive keys for gaming",
            countOfStock: 5,
            
        },
        {
            productId: 18,
            name: "Security Webcam Cover",
            price: 5,
            stock: true,
            image: "https://picsum.photos/300/200",
            description: "Security Webcam Cover - Protect your privacy",
            countOfStock: 30,
            
        },
        {
            productId: 19,
            name: "Wireless In-ear Sport Earphones",
            price: 70,
            stock: true,
            image: "https://picsum.photos/300/200",
            description: "Wireless In-ear Sport Earphones - Perfect for workouts",
            countOfStock: 12,

    
        }
    
    
        // Add more items as needed
    
    ])

    



    const [showPerPage, setShowPerPage] = useState(6);


    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    });








    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end });
    };


  return (
    <div>


        <div  className='product_pagination'>

        {
            posts.slice(pagination.start, pagination.end).map( ( product ) => (
                <Product_Card key={product.productId}  item={product} /> )
            )
        }

        </div>


        
        <PaginationScrlBtn 
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={posts.length}
        />

        
    </div>
  )
}

export default Pagination