const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken")
const { Admin, Course } = require("../db")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    // check if user already exist or not
    const response = await Admin.findOne({ username: username });

    if (response) {
        return res.status(400).send("Admin already exist ");
    }

    const admin = new Admin({
        username: username,
        password: password
    });

    await admin.save();

    res.json({
        message: "Admin created successfully"
    });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if user already exist or not
    const response = await Admin.findOne({ username: username, password: password });

    if (!response) {
        return res.status(400).send("Wrong Credentials");
    }

    const token = jwt.sign({ username, username }, password);
    res.json({
        token: token
    });
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const coursesLength = await Course.countDocuments();

    const course = new Course({
        courseId: coursesLength,
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    });

    await course.save();

    res.json({
        message: "Course created successfully",
        // courseId: coursesLength
    });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find();
    res.json({
        "courses": response
    });
});

module.exports = router;