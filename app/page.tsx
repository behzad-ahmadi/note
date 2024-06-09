'use client'
import useNotification from '@/app/hook/useNotification'
import Notes from '@/app/notes/page'
import Notif from '@/app/ui/notif'
import Link from 'next/link'
//
export default function Home() {
  const { showNotification } = useNotification()

  const handleNotif = () => {
    showNotification({
      title: 'test',
      options: {
        body: 'Hi body',
        icon: '/favicon.ico',
        data: { url: 'https://tourgram.ir' },
      },
    })
  }
  return (
    <div className='flex justify-center h-screen items-center gap-2'>
      <span className='btn' onClick={handleNotif}>
        Show notif
      </span>

      <Link href={'/notes'}>
        <span className='btn'>Goto Notes</span>
      </Link>
    </div>
  )
}
