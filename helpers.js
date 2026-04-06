const mongoose = require('mongoose');

// ✅ Standard API Response
exports.sendResponse = (res, status, message, data = null) => {
    return res.status(status).json({
        success: status < 400,
        message,
        data
    });
};

// 💰 Calculate total price (for orders)
exports.calculateTotal = (products) => {
    let total = 0;

    products.forEach(item => {
        total += item.price * item.quantity;
    });

    return total;
};

// 📧 Email validation
exports.isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
};

// 🔒 Password validation
exports.isStrongPassword = (password) => {
    return password && password.length >= 6;
};

// 🆔 MongoDB ObjectId validation
exports.isValidObjectId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
};