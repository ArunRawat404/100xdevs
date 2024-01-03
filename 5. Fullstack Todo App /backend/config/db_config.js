const mongoose = require("mongoose");
const { DB_URL } = require("./server_config");

const connect = async () => {
    await mongoose.connect(DB_URL);
};

module.exports = connect;