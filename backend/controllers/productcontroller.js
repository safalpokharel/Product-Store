import Product from "../models/product.model.js";

export const createProduct = async(req, res) =>{
    const product = req.body;

    if (!product.name || !product.price || !product.image){
        return res.status(500).json({success: false, message:"Please Provide all Fields."})
    }

    const newProduct = Product(product);

    try{
        await newProduct.save()
        res.status(200).json({success:true, data: newProduct})
    }catch(error){
        console.log("Error in creating Product", error.message);
        res.status(404).json({success: false, message:"Error in creating product."})

    }
}

export const getProducts = async(req, res)=>{
    try{
        const allProduct = await Product.find({})
        res.status(200).json({success:true, data: allProduct})

    }catch(error){
        console.log("Error in fetching Products", error.message)
        res.status(500).json({success:false, message: "Server Error"})
    }
}

export const updateProduct = async(req, res)=>{
    const {id} = req.params;
    const product = req.body;

    try{
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({success:true, data: updatedProduct});
    }catch(error){
        res.status(404).json({success: false, message: "Product not found"});
    }

}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" });
    } catch (error) {
        console.log("Error in deleting the product", error.message);
        res.status(404).json({ success: false, message: "Product not found" });
    }
};

