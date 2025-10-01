import { Routes, Route } from 'react-router-dom'
import { Home, NotFound, Cart } from './pages'
import { Navbar, Footer } from './components'

function App() {

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
