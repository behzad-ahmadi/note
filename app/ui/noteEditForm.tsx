'use client'

import React, { useEffect, useState } from 'react'
import Content from '@/app/ui/content'
import DateDisplay from '@/app/ui/dateDisplay'
import Tags from '@/app/ui/tags'
import TextEditor from '@/app/ui/textEditor'
import Title from '@/app/ui/title'
import Toolbar from '@/app/ui/toolbar'
import { useFormState } from 'react-dom'
import { INote } from '@/app/lib/models/note'

// interface NoteProps {
//   params: { id: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }

interface FormData {
  title: string
  content: string
  tags: string[]
}

export default function NoteEditForm({ ...props }: INote) {
  const [errorMessage, dispatch] = useFormState(() => {}, undefined)
  const [content, setContent] = useState<string>(props.content)
  const [title, setTitle] = useState<string>(props.title)
  const [tags, setTags] = useState<string[]>(props.hashtags)

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
  console.log('ti', title)

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

      <button type='submit' className='btn'>
        Submit
      </button>
    </form>
  )
}
