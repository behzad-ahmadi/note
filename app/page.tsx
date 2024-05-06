'use client'
import { getUser } from '@/auth'
import { add, test } from './lib/actions'
import { GetNote } from './lib/data'
import { firebaseAuth, logout } from './lib/db'
import { fetchSignInMethodsForEmail } from 'firebase/auth'

export default function Home() {
  const getN = async () => {
    GetNote('cNy9vhewLMhepEFJq2ut')
  }
  return (
    <main className='text-center mt-11'>
      <form action={test}>
        <button className='btn w-2/3'>Hi ...</button>
      </form>
      <button
        className='btn'
        onClick={() => {
          logout()
        }}
      >
        Logout
      </button>
    </main>
  )
}
