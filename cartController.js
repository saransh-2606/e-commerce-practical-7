const Cart = require('../models/Cart');

// Add to cart
exports.addToCart = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({
                userId,
                items: [{ productId, quantity }]
            });
        } else {
            cart.items.push({ productId, quantity });
        }

        await cart.save();

        res.json({ message: "Added to cart 🛒", cart });

    } catch (error) {
        res.status(500).json({ message: "Error adding to cart ❌" });
    }
};

// Get cart
exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cart ❌" });
    }
};