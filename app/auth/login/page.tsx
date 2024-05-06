'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from '@/app/lib/db'

function Page() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const router = useRouter()

  const handleForm = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault()

    const { data, error } = await signIn(email, password)

    if (error) {
      return console.log(error)
    }

    // else successful
    console.log(data)
    // return router.push('/')
  }
  return (
    <div className='wrapper'>
      <div className='form-wrapper'>
        <h1 className='mt-60 mb-30'>Sign up</h1>
        <form onSubmit={handleForm} className='form'>
          <label htmlFor='email'>
            <p>Email</p>
            <input
              onChange={e => setEmail(e.target.value)}
              required
              type='email'
              name='email'
              id='email'
              placeholder='example@mail.com'
            />
          </label>
          <label htmlFor='password'>
            <p>Password</p>
            <input
              onChange={e => setPassword(e.target.value)}
              required
              type='password'
              name='password'
              id='password'
              placeholder='password'
            />
          </label>
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Page
