import { addData, CollectionsType, getDocument } from './db'

export const AddNote = async (note: string) => {
  const res = await addData(CollectionsType.notes, note)
  console.log('RES res', res.data)
  console.log('RES err', res.error)
}

export const GetNote = async (id: string) => {
  const res = await getDocument(CollectionsType.notes, id)
  console.log('re', res)
}
