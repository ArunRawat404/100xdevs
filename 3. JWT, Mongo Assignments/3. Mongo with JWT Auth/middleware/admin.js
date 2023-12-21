const { json } = require("express");
const { Admin } = require("../db");
const jwt = require("jsonwebtoken");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const authToken = req.headers.authorization;
    // split Bearer and token string
    const token = authToken.split(" ")[1];

    try {
        const tokenObj = jwt.decode(token);
        // admin username
        const username = tokenObj.username;
        const admin = await Admin.findOne({ username: username });
        // admin password
        const password = admin.password;

        jwt.verify(token, password);
        next();
    }
    catch {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
};

module.exports = adminMiddleware;