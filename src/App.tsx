import './App.css'
import useCards from './hooks/useCards'
import Flashcard from './features/cards/components/Flashcard'


function App() {
  const { loading, cards, error } =  useCards()
  if(loading) return <h1>Loading...</h1>
  if(error){
    console.error('error fetching data: ' + error)
    return <h1>error fetching data</h1>
  }

  return (
    <div className='bg-gray-900'>
      {cards.map( c =>(
        < Flashcard  key={c.id} name={c.name} category={c.category} description={c.description} />
      ))}
    </div>
  )
}

export default App
