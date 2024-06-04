import React from 'react'

interface ContentProps {
  value: string
}

export default function Content({ value }: ContentProps) {
  return (
    <div className='min-h-5' dangerouslySetInnerHTML={{ __html: value }}></div>
  )
}
