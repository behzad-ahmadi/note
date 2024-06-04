interface TagsProps {
  value: string[]
  // onChange: (tags: string[]) => void
}

export default function Tags({ value }: TagsProps) {
  return <span className='mt-1 block w-full rounded-md shadow-sm'>{value}</span>
}
