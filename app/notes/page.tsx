// pages/index.tsx
'use server'
import { getAllNotes } from '@/app/lib/actions/noteActions'
import { INote } from '@/app/lib/models/note'
import FloatingButton from '@/app/ui/floatingButton'
import NoteCard from '@/app/ui/noteCard'
import moment from 'moment-jalaali'
// import 'moment/locale/fa' // Import Persian locale

export default async function Notes() {
  const notes = await getAllNotes()
  // moment.locale('fa')
  // console.log('note', notes)
  return (
    <div>
      {/* <SearchBar className='mt-4' /> */}
      <div className='flex flex-col gap-y-4 mt-4 overflow-y-auto'>
        {notes?.map((note: INote, index) => (
          <NoteCard
            key={index}
            id={note.id}
            title={note.title}
            date={moment(note.updatedAt).format('D MMMM')}
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
