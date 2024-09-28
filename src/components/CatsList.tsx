import { useCatContext } from '../states/useCatContext'

const CatsList = () => {

  const { catsList, onSelectCat, activeCat } = useCatContext()

  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {catsList.map((cat) => (
        <button key={cat.name} style={{ cursor: 'pointer' }} className={`card ${activeCat.id === cat.id ? 'button_active' : ''}`} onClick={() => onSelectCat(cat.id)}>
          <img src={cat.image} alt={`${cat.name}-image`} className={`logo ${activeCat.id === cat.id ? 'button_active' : ''}`} />
          <p>{cat.name}</p>
        </button>
      ))}
    </div>
  )
}

export default CatsList