'use client'
import { add } from './lib/actions'
import { GetNote } from './lib/data'
import { logout } from './lib/db'

export default function Home() {
  const getN = async () => {
    GetNote('cNy9vhewLMhepEFJq2ut')
  }
  return (
    <main>
      {/* <form> */}
      <button
        className='btn'
        onClick={() => {
          getN()
        }}
      >
        Hi ...
      </button>
      <button
        className='btn'
        onClick={() => {
          logout()
        }}
      >
        Logout
      </button>
      {/* </form> */}
    </main>
  )
}
