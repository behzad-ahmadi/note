'use server'

import connectMongo from '@/app/lib/mongodb'
import User from '@/app/lib/models/user'

export async function fetchUsers() {
  await connectMongo()
  return await User.find({})
}

export async function addUser(name: string, email: string) {
  await connectMongo()
  const user = new User({ name, email })
  await user.save()
  return user
}
