const cloudinary = require("cloudinary");
const user = require("../model/userModel");

exports.createUserData = async (req, res) => {
  try {
    const myCloud = await cloudinary.v2.uploader.upload(req.body.pdf, {
      folder: "resume",
      width: 150,
      crop: "scale",
    });
    const data = await user.create({
      userName: req.body.name,
      dateOfBirth: req.body.date,
      country: req.body.country,
      resume: myCloud.secure_url,
    });
    res.status(200).json({
      message: "Created Sucessfully",
      sucess: data,
    });
  } catch (error) {
    res.status(200).json({
      message: "Some error occured",
      error: error.message,
    });
  }
};

exports.getUserData = async (req, res) => {
  try {
    const data = await user.find();
    res.status(200).json({
      message: "Date fetch sucessfully",
      sucess: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Some error occured",
      error: error.message,
    });
  }
};

exports.sortByDate = async (req, res) => {
  try {
    const data = await user.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "sorted",
      sucess: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Some error occured",
      error: error.message,
    });
  }
};

exports.sortByName = async (req, res) => {
  try {
    const data = await user.find().sort({ userName: 1 });
    res.status(200).json({
      message: "sorted",
      sucess: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Some error occured",
      error: error.message,
    });
  }
};

exports.DeleteUser = async (req, res) => {
  try {
    const data = await user.deleteOne({ _id: req.body.id });
    res.status(200).json({
      message: "User deleted Sucessfully",
      sucess: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Some error occured",
      error: error.message,
    });
  }
};
