const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if user already exist or not
    const response = await User.findOne({ username: username });

    if (response) {
        return res.status(400).send("User already exist ");
    }

    const user = new User({
        username: username,
        password: password,
        purchasedCourses: []
    });

    await user.save();

    res.json({
        message: "User created successfully"
    });
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find().lean();
    res.json({
        "courses": response
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = parseInt(req.params.courseId);
    const response = await Course.findOne({ courseId: courseId })

    if (!response) {
        return res.status(400).send("courseId not exist ");
    }

    const user = await User.findOne({ username: req.headers.username });

    user.purchasedCourses.push(courseId);
    user.markModified('purchasedCourses');

    await user.save();

    return res.json({
        message: "Course purchased successfully'"
    });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({ username: req.headers.username });
    const purchasedCoursesIds = user.purchasedCourses;

    // finding all courses where courseId is in purchasedCoursesIds array
    const purchasedCoursesArray = await Course.find({ courseId: { $in: purchasedCoursesIds } });
    res.json({
        purchasedCourses: purchasedCoursesArray
    });
});

module.exports = router;