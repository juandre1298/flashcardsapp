import './style/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useCards from './hooks/useCards'
import Flashcard from './features/cards/components/Flashcard'
import Topbar from './features/home/components/Topbar'
import Navbar from './layout/components/Navbar'
import Home from './pages/Home'

function App() {
  const { loading, cards, error } = useCards()

  if (loading) return <h1>Loading...</h1>
  
  if (error) {
    console.error('Error fetching data: ' + error)
    return <h1>Error fetching data</h1>
  }

  return (
    <BrowserRouter>
      <div className='bg-gray-900 w-full h-full'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/library" element={<>library</>} />
          <Route path="/settings" element={<>settings</>} />
        </Routes>
        <Navbar />
      </div>
    </BrowserRouter>
  )
}

export default App