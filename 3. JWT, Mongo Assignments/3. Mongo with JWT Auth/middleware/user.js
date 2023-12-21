const { User } = require("../db")
const jwt = require("jsonwebtoken");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const authToken = req.headers.authorization;
    // split Bearer and token string
    const token = authToken.split(" ")[1];

    try {
        const tokenObj = jwt.decode(token);
        // user username
        const username = tokenObj.username;
        const user = await User.findOne({ username: username });
        // user password
        const password = user.password;

        jwt.verify(token, password);
        next();
    }
    catch {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
};

module.exports = userMiddleware;