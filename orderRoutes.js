const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');
const auth = require('../middleware/authMiddleware');

// Place order
router.post('/', auth, orderController.placeOrder);

// Get orders by user
router.get('/:userId', auth, orderController.getOrders);

module.exports = router;