'use server'

import connectMongo from '@/app/lib/mongodb'
import { transformObjectId } from '../utiles'
import { revalidatePath } from 'next/cache'
import User from '../models/user'

export async function fetchUsers() {
  await connectMongo()
  const users = await User.find({})
  return users?.map(user => transformObjectId(user.toObject())) || {}
}

export async function addUser(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await connectMongo()
    const username = formData.get('username') as string
    const email = formData.get('email') as string
    const user = new User({ username, email })
    await user.save()
    revalidatePath('/')
  } catch (error: any) {
    console.log('Add user error', error?.name)
    if (error?.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(
        (err: any) => err.message
      )
      return `Validation error: ${messages.join(', ')}`
    }
    return 'Add user error'
  }
}
