const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/Product");

dotenv.config();

// 🔥 Products Data
const products = [
  {
    name: "Ladies Tshirt",
    price: 999,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    description: "Daily Tshirt"
  },
  {
    name: "White T-Shirt",
    price: 499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    description: "Comfortable cotton t-shirt"
  },
  {
    name: "Denim Jacket",
    price: 1999,
    image: "https://images.unsplash.com/photo-1520975922323-1a7c7c1b9c63",
    description: "Stylish jacket"
  },
  {
    name: "Smart Watch",
    price: 2999,
    image: "https://images.unsplash.com/photo-1518444028785-8fbcd101ebb9",
    description: "Digital smart watch"
  },
  {
    name: "Running Shoes",
    price: 2499,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    description: "Comfortable running shoes"
  },
  {
    name: "Leather Wallet",
    price: 799,
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc",
    description: "Premium wallet"
  },
  {
    name: "Wireless Headphones",
    price: 3499,
    image: "https://images.unsplash.com/photo-1518443895914-6b57b8f3a3d4",
    description: "Noise cancelling"
  },
  {
    name: "Sunglasses",
    price: 899,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    description: "Stylish sunglasses"
  },
  {
    name: "Gaming Mouse",
    price: 1299,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
    description: "High precision mouse"
  },
  {
    name: "Laptop Stand",
    price: 1499,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    description: "Ergonomic stand"
  }
];

// 🔗 DB connect
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected ✅");

    // ❗ Pehle clear karo
    await Product.deleteMany({});

    // 🚀 Insert
    await Product.insertMany(products);

    console.log("10 Products Inserted 🎉");

    process.exit();
  })
  .catch(err => console.log(err));