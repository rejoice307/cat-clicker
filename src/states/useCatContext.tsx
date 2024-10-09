import { createContext, startTransition, useContext, useState } from 'react'
import type { ChildrenType } from '../types'

import cat1Img from '../assets/images/cat1.png'
import cat2Img from '../assets/images/cat2.png'
import cat3Img from '../assets/images/cat3.png'
import cat4Img from '../assets/images/cat4.png'
import cat5Img from '../assets/images/cat5.png'

type CatType = {
  id: number
  name: string
  image: string
  count: number
}

type CatContextType = {
  activeCat: CatType
  catsList: CatType[]
  onSelectCat: (catId: CatType['id']) => void
  onCatClick: (catId: CatType['id']) => void
}

const CatContext = createContext<CatContextType | undefined>(undefined)

export const useCatContext = () => {
  const context = useContext(CatContext)
  if (!context) {
    throw new Error('useCatContext must be used inside of CatContextProvider')
  }
  return context
}

const initialCatsList: CatType[] = [
  { id: 1, count: 0, image: cat1Img, name: 'Skippy' },
  { id: 2, count: 0, image: cat2Img, name: 'Lizzy' },
  { id: 3, count: 0, image: cat3Img, name: 'Bella' },
  { id: 4, count: 0, image: cat4Img, name: 'Misty' },
  { id: 5, count: 0, image: cat5Img, name: 'Daisy' },
]

const CATS_STORAGE_KEY = 'cat-clicker-cat-list'

const getAllCats = (): CatType[] => {
  const foundCats = localStorage.getItem(CATS_STORAGE_KEY)
  if (foundCats) {
    return JSON.parse(foundCats) as CatType[]
  }
  return initialCatsList
}

const setCatsListToStorage = (cats: CatType[]) => {
  localStorage.setItem(CATS_STORAGE_KEY, JSON.stringify(cats))
}

export const CatContextProvider = ({ children }: ChildrenType) => {

  const [catsList, setCatsList] = useState(getAllCats())
  const [activeCat, setActiveCat] = useState<CatType>(catsList[0] ?? initialCatsList[0])

  const onSelectCat: CatContextType['onSelectCat'] = (newCatId) => {
    console.log("🚀 ~ CatContextProvider ~ newCatId:", newCatId)
    const foundCat = catsList.find((cat) => cat.id === newCatId)
    if (foundCat) setActiveCat(foundCat)
  }

  const onCatClick: CatContextType['onCatClick'] = (newCatId) => {
    const foundCat = catsList.find((cat) => cat.id === newCatId)
    if (foundCat) {
      const updatedCat: CatType = { ...foundCat, count: foundCat.count + 1 }
      setActiveCat(updatedCat)
      startTransition(() => {
        const newCatsList = catsList.map((cat) => cat.id !== activeCat.id ? cat : updatedCat)
        setCatsList(newCatsList)
        setCatsListToStorage(newCatsList)
      })
    }
  }

  return (
    <CatContext.Provider value={{
      onSelectCat,
      catsList,
      activeCat,
      onCatClick
    }}>
      {children}
    </CatContext.Provider>
  )
}