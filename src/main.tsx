
import { ActiveCat } from './components/ActiveCat'
import CatsList from './components/CatsList'
import "./main.css"
import { CatContextProvider } from './states/useCatContext'

export function Main () {


  return (
    <CatContextProvider>
      <div style={{ display: 'flex', gap: 12 }}>

        <ActiveCat />

        {/* <button
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}
          onClick={() => setCat1Count((prevCount) => prevCount + 1)}
        >
          <span>{cat1Name} {cat1Count}</span>
          <img src={cat1} className="logo" alt="Farm logo" />
        </button> */}
        {/* <button
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}
          onClick={() => setCat2Count((prevCount) => prevCount + 1)}
        >
          <span>{cat2Name} {cat2Count}</span>
          <img src={cat2} className="logo" alt="React logo" />
        </button> */}
      </div>
      <h1>Select a Cat to Click</h1>
      <CatsList />
    </CatContextProvider>
  )
}
