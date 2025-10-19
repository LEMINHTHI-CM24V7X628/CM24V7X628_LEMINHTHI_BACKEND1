const mongoose = require("mongoose");

async function connect(uri) {
    try {
        // Tùy chọn useNewUrlParser và useUnifiedTopology đã cũ trong các phiên bản mongoose mới, 
        // nhưng thêm vào để tương thích tốt hơn với các hướng dẫn cũ.
        await mongoose.connect(uri); 
        console.log("Connected to the database!");
    } catch (error) {
        console.log("Could not connect to the database!", error);
        process.exit();
    }
}

module.exports = { connect };