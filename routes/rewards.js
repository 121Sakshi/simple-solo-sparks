const express = require('express');
const router = express.Router();
const Reward = require('../models/Reward');
const User = require('../models/User');
const auth = require('../middleware/auth');

// Get all rewards
router.get('/', async (req, res) => {
  try {
    const rewards = await Reward.find();
    res.json(rewards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Redeem a reward
router.post('/redeem', auth, async (req, res) => {
  try {
    const reward = await Reward.findById(req.body.rewardId);
    const user = await User.findById(req.user.id);

    if (user.sparkPoints >= reward.cost) {
      user.sparkPoints -= reward.cost;
      await user.save();

      res.json({ success: true, message: 'Reward redeemed!' });
    } else {
      res.status(400).json({ error: 'Not enough points' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
