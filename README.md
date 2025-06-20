Solo Sparks – Personal Growth Quest App
Solo Sparks is a personal growth journaling app designed to help users reflect on their daily moods, thoughts, and progress through engaging quests and reflections. Users can register, log in, submit reflections (text and images), and track their self-growth journey.

🚀 Features

🔐 Authentication – Register & login securely with JWT
📅 Daily Quest – Users get a mood-based daily challenge
✍️ Reflection Journal – Submit written thoughts + optional image
🖼️ Cloudinary Integration – Upload and store reflection images
📊 My Reflections – View all previous reflections, filterable by search
🌐 MongoDB Atlas – All data is stored securely in the cloud
⚙️ REST API Backend – Built with Node.js & Express

🛠️ Tech Stack  

Frontend:
  React
  Axios
  React Router DOM
Backend:
  Node.js
  Express
  MongoDB Atlas
  Mongoose
  JWT (for auth)
  Multer + Cloudinary (for image upload)

📁 Project Structure
bash
Copy code
root/
├── client/              # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
├── server/              # Express backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── .env                 # Environment variables

🔧 Installation

1. Clone the repo
https://github.com/121Sakshi/simple-solo-sparks
cd simple-solo-sparks

3. Setup backend
bash
Copy code
cd server
npm install
npm run dev

4. Setup frontend
bash
Copy code
cd client
npm install
npm start
Make sure MongoDB Atlas & Cloudinary credentials are correct.

📦 API Routes Overview
Auth
POST /api/auth/register
POST /api/auth/login

Reflections
POST /api/reflection – submit reflection
GET /api/reflection/me – fetch user's reflections

Upload
POST /api/upload – upload file to Cloudinary

✅ Todo
 Basic auth and JWT
 Cloudinary image upload
 Daily mood-based quest
 Add profile page
 







