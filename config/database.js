const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const { database } = require('../message.json');

const connectWithDB = () => {
  mongoose
    .connect(process.env.MONGO_Url)
    .then(() => {
      console.log(database.CONNECTED);
    })
    .catch((error) => {
      console.log(database.ERROR_CONNECTING);
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectWithDB;
