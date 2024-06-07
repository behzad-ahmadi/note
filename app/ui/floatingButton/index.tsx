'use client'
import { createNote } from '@/app/lib/actions/noteActions'
import { INoteInput } from '@/app/lib/models/note'

export default function FloatingButton() {
  const newNote: INoteInput = {
    title: 'a',
    content: 'v',
    commonlyUsed: false,
    tasks: [],
    hashtags: [],
  }

  const handleClick = async () => {
    try {
      const res = await createNote(newNote)
      console.log('res', res)
    } catch (error) {
      console.log('create note error', error)
    }
  }

  return (
    <div className='fixed bottom-4 right-4'>
      <button
        className='btn btn-circle btn-primary text-4xl'
        onClick={handleClick}
      >
        +
      </button>
    </div>
  )
}
