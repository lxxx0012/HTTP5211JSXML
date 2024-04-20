const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  url: String,
  languages: String 
});

module.exports = mongoose.model('Item', itemSchema);
