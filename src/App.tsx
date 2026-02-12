import './App.css'
import useCards from './hooks/useCards'
import Flashcard from './features/cards/components/Flashcard'
import { useState } from 'react'


function App() {
  const [ count, setCount ] = useState<number>(0)
  const { loading, cards, error } =  useCards()
  if(loading) return <h1>Loading...</h1>
  if(error){
    console.error('error fetching data: ' + error)
    return <h1>error fetching data</h1>
  }

  return (
    <div className='bg-gray-900'>
      <div>Total: {count}/{cards.length}</div>
      {cards.map( c =>(
        < Flashcard  key={c.id} name={c.name} category={c.category} description={c.description} />
      ))}
    </div>
  )
}

export default App
