import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSingleUser } from '../../services/userservice';
import { Link } from 'react-router-dom';

function SingleUsers() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    
    useEffect(() => {
        getSingleUser(id)
            .then(data => setUser(data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className="max-w-sm mx-auto bg-gray-900 p-6 rounded-xl shadow-lg text-white">
            <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
            <p className="text-lg mb-2"><strong>Email:</strong> {user.email}</p>
            <div className="mb-4">
                <h3 className="font-semibold">Address:</h3>
                <p className="text-md">{user.address?.street}</p>
                <p className="text-md">{user.address?.suite}</p>
                <p className="text-md">{user.address?.city}, {user.address?.zipcode}</p>
            </div>
            <div className="flex gap-4 text-lg mt-4">
                {/* Posts Button */}
                <Link to="/posts" className="px-4 py-2 bg-teal-600 rounded-lg hover:bg-teal-700 text-white text-center w-full transition-all duration-300">
                    Posts
                </Link>
                {/* Todos Button */}
                <Link to="/todos" className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 text-white text-center w-full transition-all duration-300">
                    Todos
                </Link>
            </div>
        </div>
    );
}

export default SingleUsers;
