'use server'

import Note, { INote, INoteInput, ITask } from '@/app/lib/models/note'
import connectToDatabase from '@/app/lib/mongodb'
import { Types } from 'mongoose'

// Create a new note
export const createNote = async (noteData: INoteInput) => {
  try {
    await connectToDatabase()

    // Validate required fields
    const errors: Partial<Record<keyof INoteInput, string>> = {}
    if (!noteData.title) {
      errors.title = 'Title is required'
    }
    if (!noteData.content) {
      errors.content = 'Content is required'
    }

    if (Object.keys(errors).length > 0) {
      throw errors
    }

    const note = new Note(noteData)
    return await note.save()
  } catch (error) {
    console.error('Error creating note:', error)
    return error // Throw the original error object
  }
}

// Get a note by its ID
export const getNoteById = async (id: string) => {
  await connectToDatabase()
  return await Note.findById(id)
}

// Update a note by its ID
export const updateNoteById = async (
  id: string,
  updateData: Partial<INote>
) => {
  await connectToDatabase()
  return await Note.findByIdAndUpdate(id, updateData, { new: true })
}

// Delete a note by its ID
export const deleteNoteById = async (id: string) => {
  await connectToDatabase()
  return await Note.findByIdAndDelete(id)
}

// Get all notes
export const getAllNotes = async () => {
  await connectToDatabase()
  return await Note.find()
}

// Add a task to a note
export const addTaskToNote = async (noteId: string, task: ITask) => {
  await connectToDatabase()
  const note = await Note.findById(noteId)
  if (note) {
    note.tasks.push(task)
    return await note.save()
  }
  throw new Error('Note not found')
}

// Update a task in a note
export const updateTaskInNote = async (
  noteId: string,
  taskId: Types.ObjectId,
  taskData: Partial<ITask>
) => {
  await connectToDatabase()
  const note = await Note.findById(noteId)
  if (note) {
    const task = note.tasks.id(taskId)
    if (task) {
      Object.assign(task, taskData)
      return await note.save()
    }
    throw new Error('Task not found')
  }
  throw new Error('Note not found')
}

// Remove a task from a note
export const removeTaskFromNote = async (
  noteId: string,
  taskId: Types.ObjectId
) => {
  await connectToDatabase()
  const note = await Note.findById(noteId)
  if (note) {
    note.tasks.id(taskId)?.remove()
    return await note.save()
  }
  throw new Error('Note not found')
}
