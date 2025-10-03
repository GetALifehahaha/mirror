import React, {useState} from 'react'
import { ProductGrid, Footer, SearchBar } from '../components'
import ProductData from '../data/ProductData'
import { useSearchParams } from 'react-router-dom'

const Home = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("q") || "";
  const categoryQuery = searchParams.get("cat") || "";
  const minQuery = searchParams.get("min") || 0;

  const productData = ProductData
  .filter((product) => 
            product.productName.toLowerCase().includes(searchQuery.toLowerCase()) && 
            product.category.toLowerCase().includes(categoryQuery.toLowerCase()) &&
            product.productPrice >= minQuery
          );

  return (
    <div>
      <SearchBar />
      <ProductGrid productData={productData}/>
      
      <Footer />
    </div>
  )
}

export default Home