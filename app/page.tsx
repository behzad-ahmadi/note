// pages/index.tsx
// 'use client'

import { useEffect, useState } from 'react'
import UserForm from './ui/userForm'
import { fetchUsers } from './lib/actions/userActions'
// import useSWR from 'swr'

interface IUser {
  _id: string
  name: string
  email: string
}

const Home = async () => {
  // const { data, isLoading, error, mutate } = useSWR('fetchUsers', fetchUsers)
  // console.log('da', data)

  const data = await fetchUsers()

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data?.map(user => (
          <li key={user._id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
      <UserForm  />
    </div>
  )
}

export default Home
