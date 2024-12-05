import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-semibold text-gray-500">Yüklenir</div>;
  }

  if (error) {
    return <div className="text-center text-lg font-semibold text-red-500">No data {error.message}</div>;
  }

  return (
    <div className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-700 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Posts</h1>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.id} className="p-6 bg-white border rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-600">{post.title}</h2>
            <p className="text-gray-800 mt-2">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
