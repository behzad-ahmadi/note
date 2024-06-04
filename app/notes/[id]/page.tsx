'use client'

import React, { useState } from 'react'
import Content from '@/app/ui/content'
import DateDisplay from '@/app/ui/dateDisplay'
import Tags from '@/app/ui/tags'
import TextEditor from '@/app/ui/textEditor'
import Title from '@/app/ui/title'
import Toolbar from '@/app/ui/toolbar'
import { useFormState } from 'react-dom'

// interface NoteProps {
//   params: { id: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }

interface FormData {
  title: string
  content: string
  tags: string[]
}

const Note = () => {
  const [errorMessage, dispatch] = useFormState(() => {}, undefined)
  const [content, setContent] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [tags, setTags] = useState<string[]>([''])

  const handleTitleChange = (title: string) => {
    setTitle(title)
  }

  const handleContentChange = (content: string) => {
    // formData.content = content
    setContent(content)
  }

  const handleTagsChange = (tags: string[]) => {
    setTags(tags)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', { title, content, tags })
  }

  return (
    <form action={dispatch} className=''>
      <DateDisplay />
      <Title value={title} />
      {/* <Content value={content} /> */}
      <Tags value={tags} />
      <TextEditor
        className='mt-4'
        value={content}
        onChange={handleContentChange}
      />

      <button
        type='submit'
        className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
      >
        Submit
      </button>
    </form>
  )
}

export default Note
