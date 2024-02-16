import express from 'express';

import Product from '../models/Product.js';

const router=express.Router();


router.get("/", async (req, res) => {
    
	try {

        const cnt=await Product.countDocuments().exec();

        const maxPrice=parseInt(req.query.maxPrice) || 500000 ;
		const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || 16;
		const search = req.query.search || "" ;
        let sortValues = req.query.sort ;
		let category = req.query.category || "All" ;
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
	


		if ( sortValues === 'None' ) {
			sortValues = 1;
		} else if( sortValues === 'desc') {
			sortValues = -1 ;
		}else{
			sortValues = 1;

		}


		console.log("sortValues : ",sortValues)

	
		const products = await Product.find(
            {
                 name: { $regex: search, $options: "i" },
                 price: { $lte: maxPrice } 
                
            })
			.where("category")
			.in([...category])
			.sort({price : sortValues})
			.skip(page * limit)
			.limit(limit);

		console.log(products);




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

