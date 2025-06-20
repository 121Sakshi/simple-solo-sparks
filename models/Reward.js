const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  title: String,
  description: String,
  cost: Number,
  type: { type: String, enum: ['boost', 'unlock', 'surprise'] },
  image: String
});

// ✅ Fix: Only compile if not already compiled
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
