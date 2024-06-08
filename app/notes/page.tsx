// pages/index.tsx
'use server'
import { getAllNotes } from '@/app/lib/actions/noteActions'
import { INote, INoteInput } from '@/app/lib/models/note'
import FloatingButton from '@/app/ui/floatingButton'
import NoteCard from '@/app/ui/noteCard'

export default async function Notes() {
  const notes = await getAllNotes()
  // console.log('note', notes)
  return (
    <div>
      {/* <SearchBar className='mt-4' /> */}
      <div className='flex flex-col gap-y-4 mt-4 overflow-y-auto'>
        {notes?.map((note: INoteInput, index) => (
          <NoteCard
            key={index}
            id={note?._id?.toString() || ''}
            title={note.title}
            date={''}
            content={note.content}
            status={'past'}
            time={note.createdAt?.toLocaleString() || ''}
          />
        ))}
      </div>
      <FloatingButton />
    </div>
  )
}
