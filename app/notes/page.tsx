// pages/index.tsx
'use server'
import { getAllNotes } from '@/app/lib/actions/noteActions'
import FloatingButton from '@/app/ui/floatingButton'
import NoteCard from '@/app/ui/noteCard'

export default async function Notes() {
  const notes = await getAllNotes()
  console.log('note', notes)
  return (
    <div>
      {/* <SearchBar className='mt-4' /> */}
      <div className='flex flex-col gap-y-4 mt-4 overflow-y-auto'>
        <NoteCard
          id={1}
          title='Task Management App UI Design'
          date='28 May'
          content='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.'
          status='now'
          time='Just Now'
        />
        <NoteCard
          id={2}
          title='Shopping List'
          date='12 May'
          content='Apple, Mango Juice, Banana 5 pcs with, ButterMilk'
          status='past'
          time='1h ago'
        />
        <NoteCard
          id={3}
          title='Shopping List'
          date='12 May'
          content='Apple, Mango Juice, Banana 5 pcs with, ButterMilk'
          status='past'
          time='1h ago'
        />
        <NoteCard
          id={4}
          title='Shopping List'
          date='12 May'
          content='Apple, Mango Juice, Banana 5 pcs with, ButterMilk'
          status='past'
          time='1h ago'
        />
      </div>
      <FloatingButton />
    </div>
  )
}
