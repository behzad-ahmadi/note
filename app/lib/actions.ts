'use server'

import { signIn } from '@/auth'
import { AddNote, GetNote } from './data'
import { AuthError } from 'next-auth'

export const add = async () => {
  //   AddNote('TEST 1')
  GetNote('cNy9vhewLMhepEFJq2ut')
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}
