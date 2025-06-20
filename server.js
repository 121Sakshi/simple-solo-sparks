require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const auth = require('./middleware/auth');

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api/upload', require('./routes/upload'));
app.use('/api/reflection', require('./routes/reflection'));
app.use('/api/profile', require('./routes/profile'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/quest', require('./routes/quest'));
app.use('/api/reflection', require('./routes/reflection'));
app.use('/api/upload', require('./routes/upload'));
app.use('/api/rewards', require('./routes/rewards.js'));
app.use('/api/profile', require('./routes/profile'));

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/rewards', require('./routes/rewards'));

app.use('/api/reflection', require('./routes/reflection'));

