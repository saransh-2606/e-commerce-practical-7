const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE ALL PRODUCTS
router.delete("/", async (req, res) => {
  try {
    await Product.deleteMany({});
    res.json({ message: "All products deleted ✅" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;