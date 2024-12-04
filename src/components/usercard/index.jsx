import React from 'react'
import { Link } from 'react-router-dom';

function UserCard({ id, name, username, email, phone, website }) {
    return (
        <div className='shadow-2xl p-[20px] rounded-[10px] bg-yellow-950  text-slate-100'>
            <Link to={`/user/${id}`}>
                <h2 className='bg-amber-400 text-black' >{name}</h2>
            </Link>
            <p className='my-[15px]'>
                <b>Username:</b>{username}</p>
            <p className='border-t-2'>Email:{email}</p>
            <a href={`https:www.${website}`} target='_blank'>Website:{website}</a>
        </div>
    )
}

export default UserCard