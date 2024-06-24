'use client'

import useLoading from '@/app/hook/useLoading'
import { deleteNoteById } from '@/app/lib/actions/noteActions'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useCallback } from 'react'

export default function DeleteButton({ id }: { id: string }) {
  const { loading, setLoading } = useLoading()

  const handleClick = useCallback(async () => {
    try {
      setLoading(true)
      console.log('id', id)
      await deleteNoteById(id)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }, [id])

  return (
    <button
      className={`text-gray-500 cursor-pointer focus:outline-none ${loading && 'loading-ball'}`}
      disabled={loading}
      onClick={handleClick}
    >
      <TrashIcon className='w-5 h-5' />
    </button>
  )
}
