import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MyReflections() {
  const [reflections, setReflections] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchReflections = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/reflection/me', {
          headers: { Authorization: token },
        });
        setReflections(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to load reflections');
      }
    };

    fetchReflections();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>📝 My Reflections</h2>

      <input
        type="text"
        placeholder="Search reflections..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '15px', padding: '8px', width: '100%' }}
      />

      {reflections
        .filter((ref) =>
          ref.text?.toLowerCase().includes(search.toLowerCase())
        )
        .map((ref) => (
          <div key={ref._id} className="bg-white shadow p-4 rounded mb-4">
            {ref.image && (
              <img
                src={ref.image}
                alt="Reflection"
                className="max-w-full h-auto mb-2"
              />
            )}
            <p className="text-gray-800 mb-2">{ref.text}</p>
            <p className="text-sm text-gray-500">
              <strong>Date:</strong>{' '}
              {new Date(ref.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
    </div>
  );
}
