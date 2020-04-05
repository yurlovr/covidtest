const mongoose = require('mongoose');
const connection = require('../libs/connection');

const dataSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.ObjectId,
    require: true,
  },
  userId: {
    type: String
  },
  answers: {
      type: Array
  }
});

module.exports = connection.model('Data', dataSchema);