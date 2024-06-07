'use client'
import { createNote } from '@/app/lib/actions/noteActions'
import { INoteInput } from '@/app/lib/models/note'

export default function FloatingButton() {
  const handleClick = async () => {
    try {
      // Define a new empty note with the type INoteInput
      const newNote: INoteInput = {
        title: '1',
        content: '11',
        commonlyUsed: false,
        tasks: [],
        hashtags: [],
      }

      // Create the note
      const result = await createNote(newNote)
      console.log('Created Note:', result)
    } catch (error: any) {
      console.error('Error creating note:', error?.message) // Log the error message
      if (error?.errors) {
        console.error('Validation errors:', error?.errors) // Log the validation errors
      }
    } finally {
      // Close the mongoose connection
      // mongoose.connection.close();
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
