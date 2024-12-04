

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
    <div className="max-w-4xl mx-auto p-4 bg-orange-950">
      <h1 className="text-3xl font-bold text-center mb-6">Posts</h1>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.id} className="p-4 border rounded-lg shadow-md hover:shadow-xl transition-all duration-200">
            <h2 className="text-xl font-semibold text-blue-600">{post.title}</h2>
            <p className="text-white mt-2">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;



