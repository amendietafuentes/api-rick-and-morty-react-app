import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Characters from './components/Characters'
import Pagination from './components/Pagination'

function App() {
  const API_URL = 'https://rickandmortyapi.com/api/character'
  const [characters, setcharacters] = useState([])
  const [info, setInfo] = useState({})

  const fetchCharacters = (API_URL) => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setcharacters(data.results)
        setInfo(data.info)
      })
      .catch((error) => console.log(error))
  }

  const onPrevious = () => {
    fetchCharacters(info.prev)
  }

  const onNext = () => {
    fetchCharacters(info.next)
  }

  useEffect(() => {
    fetchCharacters(API_URL)
  }, [])

  return (
    <>
      <Navbar brand="Rick and Morty APP" />
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  )
}

export default App
