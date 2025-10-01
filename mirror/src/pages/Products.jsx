import React, {useState} from 'react'
import { ProductGrid, Footer } from '../components'
import ProductData from '../data/ProductData'

const Home = () => {

  const [queryName, setQueryName] = useState("");
  const [queryCategory, setQueryCategory] = useState("");
  const [queryMin, setQueryMin] = useState(0);
  const [queryMax, setQueryMax] = useState(0);
  const [queryRating, setQueryRating] = useState(0);
  const [querySort, setQuerySort] = useState("");

  const sorts = [
    'price', 'rating'
  ]

  const filterProducts = () => {
    
  }

  return (
    <div>
      <ProductGrid productData={ProductData}/>
      
      <Footer />
    </div>
  )
}

export default Home