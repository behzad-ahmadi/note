import { Schema, model, Document } from 'mongoose'

interface ITask {
  description: string
  completed: boolean
  priority: number
}

interface INote extends Document {
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
  commonlyUsed: boolean
  tasks: ITask[]
}

const taskSchema = new Schema<ITask>({
  description: { type: String, required: true },
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
  },
  { timestamps: true }
)

const Note = model<INote>('Note', noteSchema)

export default Note
