const mongoose = require('mongoose');

const reflectionSchema = new mongoose.Schema({
  text: { type: String },
  fileUrl: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Reflection', reflectionSchema);
