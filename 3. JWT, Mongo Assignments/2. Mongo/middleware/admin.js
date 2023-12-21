const { Admin } = require("../db")

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    // Implement course creation logic
    const username = req.headers.username;
    const password = req.headers.password;

    const adminExist = await Admin.findOne({ username: username, password: password })

    if (!adminExist) {
        return res.status(400).json({ message: "Wrong credentials" });
    }
    next();
}

module.exports = adminMiddleware;