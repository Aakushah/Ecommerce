import express from 'express';

import products from '../config/products.json' assert {type:'json'} ;

import Product from '../models/Product.js';

const router=express.Router();


router.get("/", async (req, res) => {
    
	try {

        const cnt=await Product.countDocuments().exec();

        const maxPrice=parseInt(req.query.maxPrice) || 50000 ;
		const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || 5;
		const search = req.query.search || "";
        
        let sortValues = req.query.sortValues || "price";

		let category = req.query.category || "All";

		const categoryOptions = [

			"Electronics",
			"Apparel and Fashion",
			"Home and Kitchen",
			"Home and Office Furniture",
			"Fitness and Wellness",

		];

		category === "All"
			? (category = [...categoryOptions])
			: (category = req.query.category.split(","));

        
		 req.query.sortValues ? (sortValues = req.query.sortValues.split(",")) : (sortValues = [sortValues]);

		let sortBy = {};
		if (sortValues[1]) {
			sortBy[sortValues[0]] = sortValues[1];
		} else {
			sortBy[sortValues[0]] = "asc";
		}


		const products = await Product.find(
            {
                 name: { $regex: search, $options: "i" },
                 price: { $lte: maxPrice } 
                
            })
			.where("category")
			.in([...category])
			.sort(sortBy)
			.skip(page * limit)
			.limit(limit);


		const total = await Product.countDocuments({
			category: { $in: [...category] },
			name: { $regex: search, $options: "i" },
		});

		const response = {
			error: false,
			total,
			page: page + 1,
			limit,
			category: categoryOptions,
			products,
		};

		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: "Internal Server Error" });
	}
});




// setTimeout(async() =>{
//     await Product.deleteMany({});
// },3000)

// const insertProducts = async () => {
//     try {
        
//         const docs = await Product.insertMany(products);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };



// insertProducts()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))




export default router;

