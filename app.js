const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route"); // Import Routes
const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());

// Định nghĩa route cho API
app.use("/api/contacts", contactsRouter); // <<< Thêm Routes

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

// Xử lý lỗi 404 cho các route không được định nghĩa
app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

// Middleware xử lý lỗi tập trung
app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;