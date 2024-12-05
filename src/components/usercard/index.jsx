import React from 'react'
import { Link } from 'react-router-dom';

function UserCard({ id, name, username, email, phone, website }) {
    return (
        <div className='shadow-2xl p-[20px] rounded-[10px] bg-blue-800 hover:bg-blue-300 text-slate-100 transition-all duration-300'>
            <Link to={`/user/${id}`}>
                <h2 className='bg-amber-400 text-black hover:text-white transition-all duration-300'>{name}</h2>
            </Link>
            <p className='my-[15px]'>
                <b>Username:</b>{username}</p>
            <p className='border-t-2'>Email: {email}</p>
            <a href={`https://www.${website}`} target='_blank' rel="noopener noreferrer">
                Website: {website}
            </a>
            <div className="mt-4">
                <Link to={`/user/${id}`}>
                    <button className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 hover:text-white transition-all duration-300">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default UserCard;
