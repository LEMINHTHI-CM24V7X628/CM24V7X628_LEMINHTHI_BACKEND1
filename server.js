const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util"); // Import module DB

async function startServer() {
  try {
    // Kết nối với MongoDB
    await MongoDB.connect(config.db.uri);
    
    // Bắt đầu server
    const PORT = config.app.port;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  } catch (error) {
    console.log("Cannot connect to the database!", error);
    process.exit();
  }
}

startServer();