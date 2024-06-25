import { PencilSquareIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function DeleteButton({ id }: { id: string }) {
  return (
    <Link href={`/notes/${id}`} className=''>
      <PencilSquareIcon className='w-5 h-5' />
    </Link>
  )
}
