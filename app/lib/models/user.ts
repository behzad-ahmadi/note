// models/User.ts
import mongoose, { Document, Schema } from 'mongoose'

interface IUser extends Document {
  name: string
  email: string
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
})

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema)
