import React, {useState, useEffect} from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Product, NotFound, Cart, ProductDetails, ProductSpecs, About } from './pages'
import { Navbar } from './components'

function App() {

  const [rerender, setRerender] = useState(0);

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(JSON.parse(localStorage.getItem("cartData")).length);
  }, [rerender]);

  return (
    <>
      <Navbar cartCount={cartCount}/>
      
      <Routes>
        <Route path='/products' element={<Product />}/>
        <Route path='/products/:id' element={<ProductDetails onCartChange={() => setRerender(rerender + 1)}/>}>
          <Route path='specs' element={<ProductSpecs  />}/>
        </Route>
        <Route path='/cart' element={<Cart onCartChange={() => setRerender(rerender + 1)}/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
