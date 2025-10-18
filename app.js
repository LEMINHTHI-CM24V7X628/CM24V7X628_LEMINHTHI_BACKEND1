const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error"); // <<< Sửa đường dẫn ở đây!

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

// Xử lý lỗi 404 cho các route không được định nghĩa
app.use((req, res, next) => {
    // Code ở đây sẽ chạy khi không có route được định nghĩa nào khớp
    // với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
    return next(new ApiError(404, "Resource not found"));
});

// Middleware xử lý lỗi tập trung
// define error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {
    // Trong các đoạn code xử lý ở các route, gọi next(error) sẽ chuyển về middleware xử lý lỗi này
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;