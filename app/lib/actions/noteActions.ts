'use server'

import { IError, handleServerError } from '@/app/lib/actions/errorHandler'
import Note, { INoteDocument, INote, ITask } from '@/app/lib/models/note'
import connectToDatabase from '@/app/lib/mongodb'
import { Types } from 'mongoose'
import { revalidatePath } from 'next/cache'

export const createNote = async (noteData: INote): Promise<INote | IError> => {
  try {
    await connectToDatabase()

    const note = new Note<INote>(noteData)
    console.log('note', note)
    await note.save()
    revalidatePath('/notes')
    revalidatePath(`/notes${note.id}`)

    const plainNote = {
      ...noteData, // Include only INoteInput fields
      id: note._id.toString(), // Convert ObjectId to string
      createdAt: note.createdAt.toISOString(), // Convert Date to string
      updatedAt: note.updatedAt.toISOString(), // Convert Date to string
    }

    return plainNote
  } catch (error) {
    const err = handleServerError(error as Error)
    console.error('Error creating note:', err)
    return err
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
  updateData: Partial<INoteDocument>
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
