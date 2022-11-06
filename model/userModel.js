const mongoose = require("mongoose");
const userScheema = new mongoose.Schema({
  userName: {
    required: true,
    type: String,
  },
  dateOfBirth: {
    required: true,
    type: String,
  },
  country: {
    required: true,
    type: String,
  },
  resume: {
    required: true,
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});
const user = new mongoose.model("user", userScheema);
module.exports = user;
