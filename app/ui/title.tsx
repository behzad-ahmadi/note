interface TitleProps {
  value: string
}

export default function Title({ value }: TitleProps) {
  return <p className='mt-1 block w-full rounded-md shadow-sm'>{value}</p>
}
