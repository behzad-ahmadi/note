import { Schema, model, Document } from 'mongoose'
import mongoose from 'mongoose'

export interface ITask {
  description: string
  completed: boolean
  priority: number
}

export interface INote extends Document {
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
  commonlyUsed: boolean
  tasks: ITask[]
  hashtags: string[]
}

export interface INoteInput {
  _id?: string
  title: string
  content: string
  commonlyUsed: boolean
  tasks: ITask[]
  hashtags: string[]
  createdAt?: string
  updatedAt?: string
}

const taskSchema = new Schema<ITask>({
  description: { type: String, required: false },
  completed: { type: Boolean, default: false },
  priority: { type: Number, default: 0 },
})

const noteSchema = new Schema<INote>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    commonlyUsed: { type: Boolean, default: false },
    tasks: [taskSchema],
    hashtags: { type: [String], required: false },
  },
  { timestamps: true }
)

const Note = mongoose.models?.Note || model<INote>('Note', noteSchema)

export default Note
