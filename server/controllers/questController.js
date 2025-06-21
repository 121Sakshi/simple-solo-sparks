const Quest = require('../models/Quest');

exports.getTodayQuest = async (req, res) => {
  try {
    const mood = parseInt(req.query.mood); // e.g., /today?mood=3
    const quest = await Quest.findOne({ moodMatch: { $in: [mood] } });
    if (!quest) return res.status(404).json({ message: "No quest found for your mood." });
    res.json(quest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

