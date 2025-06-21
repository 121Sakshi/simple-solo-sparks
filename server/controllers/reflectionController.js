// server/controllers/reflectionController.js

const Reflection = require('../models/Reflection');

exports.submitReflection = async (req, res) => {
  try {
    const newReflection = new Reflection({
      text: req.body.text,
      image: req.file?.path,
      user: req.user.id,
    });

    await newReflection.save();
    res.json({ message: 'Reflection saved successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
