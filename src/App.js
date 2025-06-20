import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import TodayQuest from './pages/TodayQuest';
import ReflectionForm from './pages/ReflectionForm';
import MyReflections from './pages/MyReflections';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard'; 

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to Solo Sparks</h1>
        <nav>
          <Link to="/register">Register</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/quest">Today’s Quest</Link> |{" "}
          <Link to="/profile">Profile</Link> |{" "}
          <Link to="/dashboard">📊 Dashboard</Link> |{" "}
          <Link to="/my-reflections">My Reflections</Link>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quest" element={<TodayQuest />} />
          <Route path="/my-reflections" element={<MyReflections />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reflect" element={<ReflectionForm />} />     
        </Routes>
      </div>
    </Router>
  );
}

export default App;
