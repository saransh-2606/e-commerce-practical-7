const Product = require('../models/Product');

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products ❌" });
    }
};

// Add product
exports.addProduct = async (req, res) => {
    try {
        const { name, price, description, stock, image } = req.body;

        if (!name || !price) {
            return res.status(400).json({ message: "Name & price required ⚠️" });
        }

        const product = new Product({
            name,
            price,
            description,
            stock,
            image
        });

        await product.save();
        res.json({ message: "Product added ✅", product });

    } catch (error) {
        res.status(500).json({ message: "Error adding product ❌" });
    }
};