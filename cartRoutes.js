const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController');
const auth = require('../middleware/authMiddleware');

// Add to cart
router.post('/', auth, cartController.addToCart);

// Get cart by user
router.get('/:userId', auth, cartController.getCart);

module.exports = router;