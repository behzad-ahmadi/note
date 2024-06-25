import { Schema, model, Document } from 'mongoose'
import mongoose from 'mongoose'

export interface ITask {
  description: string
  completed: boolean
  priority: number
}

export interface INoteDocument extends Document {
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
  commonlyUsed: boolean
  tasks: ITask[]
  hashtags: string[]
}

export interface INote {
  id: string
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

const noteSchema = new Schema<INoteDocument>(
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

// Add transformation functions to omit __v field
noteSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    delete ret.__v
    return ret
  },
})

noteSchema.set('toObject', {
  transform: (doc, ret, options) => {
    delete ret.__v
    return ret
  },
})

const Note = mongoose.models?.Note || model<INoteDocument>('Note', noteSchema)

export default Note
