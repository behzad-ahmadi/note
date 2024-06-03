export default function SearchBar({ className }: { className: string }) {
  return (
    <div className={className}>
      <input
        type='text'
        placeholder='Search Here'
        className='input input-bordered w-full'
      />
    </div>
  )
}
