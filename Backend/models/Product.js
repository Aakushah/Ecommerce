import mongoose from "mongoose";

const productSchema=mongoose.Schema(
    {

      
        name:{type:String,required:true},
        price:{type:Number,required:true},
        stock:{type:Boolean,required:true},
        image:{type:String,required:true},
        description:{type:String,required:true},
        countOfStock:{type:Number,required:true},
        category:{type:String,required:true},

    },
    {
        timestamps:true,
    }
)

const Product=mongoose.model('Product',productSchema);

export default Product;
