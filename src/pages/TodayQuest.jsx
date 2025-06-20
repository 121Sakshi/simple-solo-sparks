import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TodayQuest() {
  const [quest, setQuest] = useState(null);
  const [mood, setMood] = useState(3);

  const fetchQuest = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`/api/quest/today?mood=${mood}`, {
        headers: {
          Authorization: token
        }
      });
      setQuest(res.data);
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to fetch quest');
    }
  };

  useEffect(() => {
    fetchQuest();
  }, [mood]);

  return (
    <div>
      <h2>Today’s Quest</h2>
      <label>Select your mood: </label>
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value={1}>😢 Sad</option>
        <option value={2}>😐 Neutral</option>
        <option value={3}>🙂 Calm</option>
        <option value={4}>😄 Happy</option>
        <option value={5}>🤩 Excited</option>
      </select>

      {quest ? (
        <div>
          <h3>{quest.title}</h3>
          <p>{quest.description}</p>
        </div>
      ) : (
        <p>No quest available for this mood.</p>
      )}
    </div>
  );
}
