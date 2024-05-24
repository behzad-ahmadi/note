// pages/index.tsx
'use client'

import { useEffect, useState } from 'react'
import UserForm from './ui/userForm'
import { fetchUsers } from './lib/actions/userActions'

interface IUser {
  _id: string
  name: string
  email: string
}

const Home = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers()
      setUsers(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
      <UserForm />
    </div>
  )
}

export default Home
