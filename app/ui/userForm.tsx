// components/UserForm.tsx
'use client'

import { useState, FormEvent } from 'react'
import { addUser } from '@/app/lib/actions/userActions'
import { useFormState, useFormStatus } from 'react-dom'

const UserForm = () => {
  const [name, setName] = useState('behzad')
  const [email, setEmail] = useState('bh.ahmady@gmail.com')
  const [errorMessage, dispatch] = useFormState(addUser, undefined)
  console.log('m', errorMessage)
  return (
    <form action={dispatch}>
      <input
        id='name'
        name='name'
        type='text'
        placeholder='Name'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        id='email'
        name='email'
        type='email'
        placeholder='Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <SubmitButton />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </form>
  )
}

export default UserForm

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button type='submit' disabled={pending}>
      Add User
    </button>
  )
}
