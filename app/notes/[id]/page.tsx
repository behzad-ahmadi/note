import { getNoteById } from '@/app/lib/actions/noteActions'
import { INote } from '@/app/lib/models/note'
import NoteEditForm from '@/app/ui/noteEditForm'

export default async function Note({ params }: { params: { id: string } }) {
  try {
    const note: INote = await getNoteById(params.id)
    console.log('no', note)
    return (
      <NoteEditForm
        id={note.id}
        commonlyUsed={note.commonlyUsed}
        content={note.content}
        hashtags={note.hashtags}
        tasks={note.tasks}
        title={note.title}
        createdAt={note.createdAt}
        updatedAt={note.updatedAt}
      />
    )
  } catch (error) {
    console.log('err', error)
  }

  return <></>
}
