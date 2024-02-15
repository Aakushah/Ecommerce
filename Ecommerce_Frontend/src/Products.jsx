import React from 'react'
import Product_Card from './Components/Product_Card'

const Products = ({className}) => {

    const products = [
        {
          productId: 1,
          name: "Laptop",
          price: 80000,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Laptop - Powerful device for professionals",
          countOfStock: 10,
          category: "Electronics",
        },
        {
          productId: 2,
          name: "Smartphone",
          price: 12000,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Smartphone - Stay connected on the go",
          countOfStock: 25,
          category: "Electronics",
        },
        {
          productId: 3,
          name: "Running Shoes",
          price: 100,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Running Shoes - Comfort for your workouts",
          countOfStock: 50,
          category: "Apparel and Fashion",
        },
        {
          productId: 4,
          name: "Coffee Maker",
          price: 5000,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Coffee Maker - Brew your favorite coffee at home",
          countOfStock: 15,
          category: "Home and Kitchen",
        },
        {
          productId: 5,
          name: "Bluetooth Earbuds",
          price: 500,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Bluetooth Earbuds - Wireless audio experience",
          countOfStock: 30,
          category: "Electronics",
        },
        {
          productId: 6,
          name: "Casual T-Shirt",
          price: 20,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Casual T-Shirt - Everyday comfort",
          countOfStock: 100,
          category: "Apparel and Fashion",
        },
        {
          productId: 7,
          name: "Desk Chair",
          price: 200,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Desk Chair - Comfort for your workspace",
          countOfStock: 20,
          category: "Home and Office Furniture",
        },
        {
          productId: 8,
          name: "Fitness Tracker",
          price: 150,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Fitness Tracker - Monitor your health and workouts",
          countOfStock: 40,
          category: "Electronics",
        },
        {
          productId: 9,
          name: "Cookware Set",
          price: 1000,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Cookware Set - Essential for your kitchen",
          countOfStock: 10,
          category: "Home and Kitchen",
        },
        {
          productId: 10,
          name: "Leather Wallet",
          price: 50,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Leather Wallet - Stylish and functional",
          countOfStock: 60,
          category: "Apparel and Fashion",
        },
        {
          productId: 11,
          name: "Gaming Console",
          price: 300,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Gaming Console - Ultimate gaming experience",
          countOfStock: 12,
          category: "Electronics",
        },
        {
          productId: 12,
          name: "Travel Backpack",
          price: 80,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Travel Backpack - Convenient for your adventures",
          countOfStock: 35,
          category: "Apparel and Fashion",
        },
        {
          productId: 13,
          name: "Yoga Mat",
          price: 30,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Yoga Mat - Enhance your yoga practice",
          countOfStock: 25,
          category: "Fitness and Wellness",
        },
        {
          productId: 14,
          name: "Desktop Monitor",
          price: 250,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Desktop Monitor - Crystal-clear display for work or play",
          countOfStock: 18,
          category: "Electronics",
        },
        {
          productId: 15,
          name: "Winter Jacket",
          price: 120,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Winter Jacket - Stay warm in cold weather",
          countOfStock: 22,
          category: "Apparel and Fashion",
        },
        {
          productId: 16,
          name: "Digital Camera",
          price: 600,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Digital Camera - Capture your favorite moments",
          countOfStock: 15,
          category: "Electronics",
        },
        {
          productId: 17,
          name: "Bedding Set",
          price: 80,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Bedding Set - Comfortable and stylish for your bedroom",
          countOfStock: 30,
          category: "Home and Kitchen",
        },
        {
          productId: 18,
          name: "Wireless Mouse",
          price: 25,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Wireless Mouse - Convenient navigation for your computer",
          countOfStock: 40,
          category: "Electronics",
        },
        {
          productId: 19,
          name: "Sunglasses",
          price: 35,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Sunglasses - Protect your eyes in style",
          countOfStock: 50,
          category: "Apparel and Fashion",
        },
        {
          productId: 20,
          name: "Air Fryer",
          price: 120,
          stock: true,
          image: "https://picsum.photos/300/200",
          description: "Air Fryer - Healthy cooking with less oil",
          countOfStock: 15,
          category: "Home and Kitchen",
        },
      ];
      

  return (
    <div className={`product`}>


        {
            products.map( ( product ) => (
                <Product_Card key={product.productId}  item={product} /> )
            )
        }
        
     


    </div>
  )
}

export default Products