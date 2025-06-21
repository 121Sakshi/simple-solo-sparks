const mongoose = require('mongoose');

const questSchema = new mongoose.Schema({
  title: String,
  description: String,
  moodMatch: [Number], // e.g. [1, 2, 3]
  category: String,
  repeatable: Boolean
});

module.exports = mongoose.model('Quest', questSchema);
