// import { initializeApp, getApps } from 'firebase/app'
// import {
//   getFirestore,
//   doc,
//   setDoc,
//   DocumentReference,
//   getDoc,
// } from 'firebase/firestore'
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   getAuth,
//   signOut,
// } from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// }

// // Initialize Firebase
// const app =
//   getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
// const db = getFirestore(app)
// export const firebaseAuth = getAuth(app)

// interface AddDataResponse {
//   data: DocumentReference | null
//   error: Error | null
// }

// export enum CollectionsType {
//   notes = 'notes',
// }

// export async function addData(
//   collection: CollectionsType,
//   data: any
// ): Promise<AddDataResponse> {
//   try {
//     await setDoc(doc(db, collection), data, {
//       merge: true,
//     })
//     const _data = doc(db, collection)
//     return { data: _data, error: null }
//   } catch (error: any) {
//     return { data: null, error }
//   }
// }

// export async function getDocument(collection: string, id: string) {
//   let docRef = doc(db, collection, id)

//   let data = null
//   let error = null

//   try {
//     data = await getDoc(docRef)
//     if (data.exists()) data = data.data()
//   } catch (e) {
//     error = e
//   }

//   return { data, error }
// }

// export async function signUp(email: string, password: string) {
//   let data = null,
//     error = null
//   try {
//     data = await createUserWithEmailAndPassword(firebaseAuth, email, password)
//   } catch (e) {
//     error = e
//   }

//   return { data, error }
// }

// export async function signIn(email: string, password: string) {
//   let data = null,
//     error = null
//   try {
//     data = await signInWithEmailAndPassword(firebaseAuth, email, password)
//   } catch (e) {
//     error = e
//   }

//   return { data, error }
// }

// export async function logout() {
//   let data = null,
//     error = null
//   try {
//     data = await signOut(firebaseAuth)
//   } catch (e) {
//     error = e
//   }

//   return { data, error }
// }
