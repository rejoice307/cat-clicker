import type { NoteType } from '../states/useNotesContext'

type NoteCardProps = NoteType

const NoteCard = ({ date, title }: NoteCardProps) => {
  return (
    <button className={`card`} type='button'>
      <p>{title}</p>
      <p>Created At: {date}</p>
    </button>
  )
}

export default NoteCard