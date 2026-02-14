import './style/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <div className='w-full h-full'>
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