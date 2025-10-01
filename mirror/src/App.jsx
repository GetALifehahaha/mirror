import { Routes, Route } from 'react-router-dom'
import { Product, NotFound, Cart, ProductDetails } from './pages'
import { Navbar, Footer } from './components'

function App() {

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/products' element={<Product />}/>
        <Route path='/products/:id' element={<ProductDetails  />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
