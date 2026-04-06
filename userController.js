const User = require('../models/User');

// Register user
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email & password required ⚠️" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({ message: "User already exists ⚠️" });
        }

        const user = new User({ name, email, password });
        await user.save();

        res.json({ message: "User registered ✅", user });

    } catch (error) {
        res.status(500).json({ message: "Error registering user ❌" });
    }
};