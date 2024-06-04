// pages/index.tsx

import FloatingButton from '@/app/ui/floatingButton'
import Header from '@/app/ui/header'
import NoteCard from '@/app/ui/noteCard'
import SearchBar from '@/app/ui/searchbar'

export default function Notes() {
  return (
    <div className='text-white'>
      {/* <SearchBar className='mt-4' /> */}
      <div className='flex flex-col gap-y-4 mt-4 overflow-y-auto'>
        <NoteCard
          title='Task Management App UI Design'
          date='28 May'
          content='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.'
          status='now'
          time='Just Now'
        />
        <NoteCard
          title='Shopping List'
          date='12 May'
          content='Apple, Mango Juice, Banana 5 pcs with, ButterMilk'
          status='past'
          time='1h ago'
        />
        <NoteCard
          title='Shopping List'
          date='12 May'
          content='Apple, Mango Juice, Banana 5 pcs with, ButterMilk'
          status='past'
          time='1h ago'
        />
        <NoteCard
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
