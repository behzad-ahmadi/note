import React from 'react'

const Toolbar: React.FC = () => {
  return (
    <div className='flex flex-wrap gap-2 mt-4'>
      <div className='flex gap-1'>
        <button className='bg-white p-2 rounded'>⬆️</button>
        <button className='bg-white p-2 rounded'>⬇️</button>
        <button className='bg-white p-2 rounded'>⬅️</button>
      </div>
      <div className='flex gap-1'>
        <button className='bg-white p-2 rounded'>H1</button>
        <button className='bg-white p-2 rounded'>H2</button>
        <button className='bg-white p-2 rounded'>H3</button>
      </div>
      <div className='flex gap-1'>
        <button className='bg-white p-2 rounded'>Bold</button>
        <button className='bg-white p-2 rounded'>Underline</button>
        <button className='bg-white p-2 rounded'>Italic</button>
      </div>
      <div className='flex gap-1'>
        <button className='bg-white p-2 rounded'>Avenir</button>
        <button className='bg-white p-2 rounded'>American</button>
        <button className='bg-white p-2 rounded'>Sans serif</button>
        <button className='bg-white p-2 rounded'>Creative Font</button>
      </div>
    </div>
  )
}

export default Toolbar
