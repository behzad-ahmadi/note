import { deleteNoteById } from '@/app/lib/actions/noteActions'
import Link from 'next/link'
import { TrashIcon } from '@heroicons/react/24/outline'
import { Button } from '@/app/ui/button'
import DeleteButton from '@/app/ui/buttons/cardDeleteButton'

type NoteCardProps = {
  id: string
  title: string
  date: string
  content: string
  status: 'now' | 'past'
  time: string
}

export default function NoteCard({
  id,
  title,
  date,
  content,
  status,
  time,
}: NoteCardProps) {
  return (
    <div className='card bg-base-200 shadow-xl'>
      <div className='card-body p-3'>
        <div className='flex justify-between'>
          <span className='text-gray-500 text-sm'>{date}</span>
          <DeleteButton id={id} />
        </div>
        <Link href={`/notes/${id}`}>
          <h2 className='card-title'>{title}</h2>

          <p>{content}</p>
          <div className='card-actions justify-end'>
            <span
              className={`badge ${status === 'now' ? 'badge-success' : 'badge-secondary'}`}
            >
              {time}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
