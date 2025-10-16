import React, {useState, useEffect} from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Product, NotFound, Cart, ProductDetails, ProductSpecs, About, Layout } from './pages'

function App() {

  return (
    <>      
      <Routes>
        <Route element={<Layout />}>
          <Route path='/products' element={<Product />}/>
          <Route path='/products/:id' element={<ProductDetails />}>
            <Route path='specs' element={<ProductSpecs  />}/>
          </Route>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/about' element={<About />}/>
        </Route>

        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
