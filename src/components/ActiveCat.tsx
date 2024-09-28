import { useCatContext } from '../states/useCatContext'

export const ActiveCat = () => {

  const { activeCat, onCatClick } = useCatContext()

  return (
    <button
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}
      onClick={() => onCatClick(activeCat.id)}
    >
      <span>{activeCat.name} {activeCat.count}</span>
      <img src={activeCat.image} className="logo" alt="Farm logo" />
    </button>
  )
}
