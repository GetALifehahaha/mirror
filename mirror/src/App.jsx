import { Routes, Route } from 'react-router-dom'
import { Product, NotFound, Cart, ProductDetails, ProductSpecs } from './pages'
import { Navbar } from './components'

function App() {

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/products' element={<Product />}/>
        <Route path='/products/:id' element={<ProductDetails  />}/>
        <Route path='/products/:id/specs' element={<ProductSpecs  />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
