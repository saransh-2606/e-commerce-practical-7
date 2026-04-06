module.exports = (req, res, next) => {
    const userId = req.headers.userid;

    if (!userId) {
        return res.status(401).json({
            message: "Unauthorized ❌ (No userId)"
        });
    }

    // attach userId to request
    req.userId = userId;

    next();
};