import React, { useState } from 'react';
import axios from 'axios';

export default function ReflectionForm() {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return alert('Please login first');

    const formData = new FormData();
    formData.append('text', text);
    if (file) formData.append('image', file); // 🟢 match backend: upload.single('image')

    try {
      const res = await axios.post('/api/reflection', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token,
        },
      });

      setMessage(res.data.message || 'Reflection submitted!');
      setText('');
      setFile(null);
    } catch (err) {
      console.error(err);
      setMessage('Something went wrong!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Submit Reflection</h2>
      
      <textarea
        placeholder="Write your reflection..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        className="w-full p-2 border border-gray-300 rounded mb-3"
      ></textarea>

      <input
        type="file"
        accept="image/*,audio/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-3 block"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>

      {message && <p className="mt-3 text-green-600">{message}</p>}
    </form>
  );
}
