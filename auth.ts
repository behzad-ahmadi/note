import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { authConfig } from './auth.config'
import { z } from 'zod'
import type { User } from '@/app/lib/definitions'
import bcrypt from 'bcrypt'
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth'
import { firebaseAuth } from './app/lib/db'

export async function getUser(
  email: string,
  password: string
): Promise<User | undefined> {
  try {
    const signInMethods = await fetchSignInMethodsForEmail(firebaseAuth, email)
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')

    if (signInMethods.length === 0) {
      // User does not exist, register them
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(firebaseAuth, email, password)
      const user = userCredential.user

      console.log(email, 'User registered successfully')
      return {
        email: user.email || '',
        id: user.uid,
        name: '',
        password: password,
      }
    } else {
      // User exists, log them in
      const res = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      )
      console.log(res, 'User logged in successfully')
    }
    // console.log('user data', data)
  } catch (e) {
    console.error('Failed to fetch user:', e)
    throw new Error('Failed to fetch user.')
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          const hashedPassword = await bcrypt.hash(password, 10)
          const user = await getUser(email, hashedPassword)
          if (!user) return null
          const passwordsMatch = await bcrypt.compare(password, user.password)

          if (passwordsMatch) return user
        }

        console.log('Invalid credentials')
        return null
      },
    }),
  ],
})
