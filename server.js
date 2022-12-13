const app = require("./app");
const cloudinary=require('cloudinary')



cloudinary.config({
  cloud_name: "yourcloudinaryname",
  api_key: "your api key",
  api_secret: "your api secret",
});

// Handling Uncaught Exception

//Example of uncaught exception : console.log(youtube)-->here youtube is invalid
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

//unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});

app.listen(4000, () => {
  console.log("Server running on prot 4000");
});

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/assignment");
