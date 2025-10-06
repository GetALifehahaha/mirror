import React, {useState} from 'react'
import { ProductGrid, Footer, SearchBar } from '../components'
import ProductData from '../data/ProductData'
import { useSearchParams } from 'react-router-dom'

const Home = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("q") || "";
  const categoryQuery = searchParams.get("cat") || "";
  const minQuery = searchParams.get("min") || 0;
  const maxQuery = searchParams.get("max") || 0;
  const sortQuery = searchParams.get("sort") || '';

  const productData = ProductData
  .filter((product) => 
            product.productName.toLowerCase().includes(searchQuery.toLowerCase()) && 
            product.category.toLowerCase().includes(categoryQuery.toLowerCase()) &&
            product.productPrice >= minQuery)
  .filter((product) => maxQuery != 0 ? product.productPrice <= maxQuery : product )
  .sort((a, b) => {
    if (sortQuery === "price") return a.productPrice - b.productPrice;
    else if (sortQuery === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div>
      <SearchBar />
      <ProductGrid productData={productData}/>
      
      <Footer />
    </div>
  )
}

export default Home