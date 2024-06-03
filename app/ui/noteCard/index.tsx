type NoteCardProps = {
  title: string
  date: string
  content: string
  status: 'now' | 'past'
  time: string
}

export default function NoteCard({
  title,
  date,
  content,
  status,
  time,
}: NoteCardProps) {
  return (
    <div className='card bg-base-200 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p className='text-gray-500'>{date}</p>
        <p>{content}</p>
        <div className='card-actions justify-end'>
          <span
            className={`badge ${status === 'now' ? 'badge-success' : 'badge-secondary'}`}
          >
            {time}
          </span>
        </div>
      </div>
    </div>
  )
}
