import { useRef } from 'react'
import { NotesContextProvider, useNotesContext, type NoteType } from '../states/useNotesContext'
import NoteCard from '../components/NoteCard'

const Noter = () => {

  const { add, notes } = useNotesContext()

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {

  }

  return (
    <NotesContextProvider>
      <form style={{ display: 'flex', gap: 12 }} onSubmit={handleSubmit}>
        <h1>Noter</h1>
        <input name='title' ref={inputRef} /> <button type='submit'>Add</button>
        {notes.map((note: NoteType, idx: number) => (
          <NoteCard key={idx} {...note} />
        ))}
      </form>
    </NotesContextProvider>
  )
}

export default Noter