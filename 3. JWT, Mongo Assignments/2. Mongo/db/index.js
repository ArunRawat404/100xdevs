const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('your-mongodb-url');


// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String
}, { strict: false });

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
}, { strict: false });

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}   