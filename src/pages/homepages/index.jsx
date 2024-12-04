import React, { useEffect, useState } from 'react'
import { getAllUser } from '../../services/userservice'
import UserCard from '../../components/usercard'

function Home() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getAllUser()
    .then(data => setUsers(data))
    .catch(err => console.log(err)
    )
  }, [])
  return (
    <div className='grid grid-cols-4 gap-4'>
      { users.map(user=> <UserCard {...user} key={user.id}/>)}
    </div>
  )
}

export default Home