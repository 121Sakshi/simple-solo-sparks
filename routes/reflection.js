const express = require('express');
const router = express.Router();
const { submitReflection } = require('../controllers/reflectionController');
const { upload } = require('../middleware/cloudinary');
const auth = require('../middleware/auth');
const Reflection = require('../models/Reflection'); // 🔄 Already imported here

// ✅ POST route: submit reflection with file
router.post('/', auth, upload.single('image'), submitReflection);

// ✅ GET /me route: fetch user's reflections
router.get('/me', auth, async (req, res) => {
  try {
    const reflections = await Reflection.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(reflections);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ Export router at the END
module.exports = router;
