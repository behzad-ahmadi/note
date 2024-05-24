// lib/mongodb.ts
import mongoose from 'mongoose'

mongoose.set('debug', true)

const connectMongo = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log('Already connected to MongoDB')
    return
  }
  try {
    console.log('Connecting to MongoDB...')
    await mongoose.connect(process.env.MONGODB_URI!)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
}

export default connectMongo
