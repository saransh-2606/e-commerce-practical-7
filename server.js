const Product = require('./models/Product');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log("DB Error:", err));

// ✅ Root Route
app.get('/', (req, res) => {
    res.send("E-commerce API running 🚀");
});

// ❌ Global Error Handler
const errorHandler = require('./middleware/errorMiddleware');
app.use(errorHandler);

// 🚀 Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});

app.delete("/api/products", async (req, res) => {
  try {
    await Product.deleteMany({});
    res.json({ message: "All products deleted ✅" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});