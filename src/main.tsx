
import { ActiveCat } from './components/ActiveCat'
import CatsList from './components/CatsList'
import { CatContextProvider } from './states/useCatContext'
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CatClicker from './pages/CatClicker'

export function Main () {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/cats' element={<CatClicker/>} />
      <Route path='/notes' element={<Noter/>} />
    </Routes>
    </BrowserRouter>
    
  )
}
