import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartData } from '../data/CartData'

const Cart = () => {

  const [productsCheckout, setProductsCheckout] = useState([]);
  const [grossTotal, setGrossTotal] = useState(0);

  const navigate = useNavigate();

  const listCartProducts = CartData.map(product => 
    <div key={product.id}>
      <button onClick={() => handleProductsForCheckout(product)}>Add</button>
      <h5 onClick={() => navigate(`/products/${product.id}`)}>{product.productName} : </h5>
      <h5>{product.productPrice}</h5>
    </div>
  );

  const listProductsForCheckout = productsCheckout.map(product =>
    <div key={product.id}>
      <h5>{product.productName} : </h5>
      <h5>{product.productPrice}</h5>
    </div>
  )

  useEffect(() => {
    handleSetGrossTotal();
  }, [productsCheckout])

  const handleSetGrossTotal = () => {
    setGrossTotal(0);

    productsCheckout.forEach(product => setGrossTotal(prevGT => prevGT + product.productPrice));
  }

  const handleProductsForCheckout = (product) => {

    setProductsCheckout(pc => {
      const productInCheckout = pc.some(p => p.id === product.id);

      if (productInCheckout) {
        return pc.filter(p => p.id !== product.id);
      } else {
        return [...pc, product];
      }
    });
  } 

  return (
    <div>{listCartProducts}
    
      <div>
        {listProductsForCheckout}
        {grossTotal}
      </div>
    </div>
  );
}

export default Cart