// Dashboard.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Dashboard() {
  const [reflections, setReflections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/reflection/me', {
        headers: { Authorization: token },
      });
      setReflections(res.data);
    };
    fetchData();
  }, []);

  const moodStats = {};
  const dateStats = {};

  reflections.forEach((ref) => {
    const mood = ref.mood || 'Unknown';
    const date = new Date(ref.createdAt).toLocaleDateString();

    moodStats[mood] = (moodStats[mood] || 0) + 1;
    dateStats[date] = (dateStats[date] || 0) + 1;
  });

  const moodData = Object.entries(moodStats).map(([key, value]) => ({
    name: key,
    value,
  }));

  const dateData = Object.entries(dateStats).map(([key, value]) => ({
    date: key,
    reflections: value,
  }));

  return (
    <div style={{ padding: '20px' }}>
      <h2>📈 Reflection Analytics</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
        <div style={{ width: '45%' }}>
          <h3>Mood Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={moodData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {moodData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div style={{ width: '50%' }}>
          <h3>Reflections Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="reflections" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
