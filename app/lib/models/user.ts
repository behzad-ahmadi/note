import mongoose from 'mongoose'
import { Schema, model, Document, Model, CallbackError } from 'mongoose'
import bcrypt from 'bcrypt'

// Interface for the user document
interface IUser extends Document {
  username: string
  email: string
  password: string
  fullName: string
  profilePicture: string
  bio: string
  roles: string[]
  notes: Schema.Types.ObjectId[]
  comparePassword(candidatePassword: string): Promise<boolean>
}

// User schema definition
const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: false },
    fullName: { type: String, required: false },
    profilePicture: { type: String, default: '' },
    bio: { type: String, default: '' },
    roles: [{ type: String, enum: ['user', 'admin'], default: 'user' }],
    notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }],
  },
  { timestamps: true }
)

// Middleware to hash the password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  try {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    return next()
  } catch (err) {
    return next(err as CallbackError)
  }
})

// Method to compare passwords
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password)
}

// User model creation
const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema)

export default User
