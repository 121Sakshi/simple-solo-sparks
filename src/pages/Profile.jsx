import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/profile', {
          headers: { Authorization: token },
        });
        setProfile(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to load profile');
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h2>My Profile</h2>
      <p><strong>Username:</strong> {profile.username}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Spark Points:</strong> {profile.sparkPoints}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
