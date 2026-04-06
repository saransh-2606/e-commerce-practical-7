const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const validate = require('../middleware/validateMiddleware');

// Register user
router.post('/register', validate, userController.registerUser);

module.exports = router;