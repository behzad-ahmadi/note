'use server'

import connectMongo from '@/app/lib/mongodb'
import User from '@/app/lib/models/user'
import { transformObjectId } from '../utiles'
import { revalidatePath } from 'next/cache'

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
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const user = new User({ name, email })
    await user.save()
    revalidatePath('/')
  } catch (error) {
    return 'Add user error'
  }
}
