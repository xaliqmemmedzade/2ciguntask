import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        setTodos(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Todos</h1>
      <ul className="space-y-4">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="p-6 border rounded-lg shadow-md bg-teal-400 hover:bg-blue-800 hover:shadow-xl  hover:scale-105 hover:text-white transition-all duration-700"
          >
            <h2 className="text-xl font-semibold text-stone-800 ">{todo.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
