const mongoose = require("mongoose");

async function connectMongoDB(url) {
  try {
    return await mongoose.connect(url);
  } catch (error) {
    return error;
  }
}

module.exports = {
  connectMongoDB,
};
