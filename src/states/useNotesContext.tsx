import { createContext, useContext, useState } from 'react'
import type { ChildrenType } from '../types'

export type NoteType = {
  title: string
  date: number
}

type NotesContextType = {
  notes: Array<NoteType>
  add: (title: string) => void
}

const NotesContext = createContext<NotesContextType | undefined>(undefined)

const initialNotesList: NoteType[] = [
  { date: Date.now(), title: 'Sun bathe' },
  { date: Date.now(), title: 'Skin Care' },
]

const NOTES_STORAGE_KEY = 'not-manager-notes-list'

export const useNotesContext = () => {
  const context = useContext(NotesContext)
  if (!context) throw new Error('useNotesContext must be used inside of NotesContextProvider')
  return context
}

const getInitialNotes = (): NoteType[] => {
  const foundCats = getNotesFromStorage()
  return foundCats ? foundCats : initialNotesList
}

const getNotesFromStorage = (): NoteType[] | null => {
  const storedValue = localStorage.getItem(NOTES_STORAGE_KEY)
  if (storedValue) return JSON.parse(storedValue)
  else return null
}

const updateNotesToStorage = (notes: NoteType[]): void => {
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes))
}

export const NotesContextProvider = ({ children }: ChildrenType) => {

  const [notes, setNotes] = useState<NoteType[]>(getInitialNotes())

  const notesUpdater = (newNotes: NoteType[]) => {
    setNotes(newNotes)
    updateNotesToStorage(newNotes)
  }

  const add = (title: NoteType['title']): void => {
    const updatedNotes: NoteType[] = [...notes, { title, date: Date.now() }]
    notesUpdater(updatedNotes)
  }

  return (
    <NotesContext.Provider value={{
      notes,
      add,
    }}>
      {children}
    </NotesContext.Provider>
  )
}