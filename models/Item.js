const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model('Item', itemSchema);
