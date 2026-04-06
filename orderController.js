const Order = require('../models/Order');

// Place order
exports.placeOrder = async (req, res) => {
    try {
        const { userId, products, totalAmount } = req.body;

        const order = new Order({
            userId,
            products,
            totalAmount
        });

        await order.save();

        res.json({ message: "Order placed 📦", order });

    } catch (error) {
        res.status(500).json({ message: "Error placing order ❌" });
    }
};

// Get orders
exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders ❌" });
    }
};