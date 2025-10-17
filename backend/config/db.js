<<<<<<< HEAD
// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connecté');
  } catch (error) {
    console.error('Erreur MongoDB:', error.message);
=======
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connecté !");
  } catch (err) {
    console.error(err.message);
>>>>>>> 180280c (add features)
    process.exit(1);
  }
};

<<<<<<< HEAD
module.exports = connectDb;
=======
module.exports = connectDB;
>>>>>>> 180280c (add features)
