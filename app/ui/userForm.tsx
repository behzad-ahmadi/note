// components/UserForm.tsx
'use client'

import { useState, FormEvent } from 'react'
import { addUser } from '@/app/lib/actions/userActions'

const UserForm = () => {
  const [name, setName] = useState('behzad')
  const [email, setEmail] = useState('bh.ahmady@gmail.com')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const user = await addUser(name, email)
    console.log(user)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type='submit'>Add User</button>
    </form>
  )
}

export default UserForm
