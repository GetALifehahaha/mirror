import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ProductData from '../data/ProductData'
import { MdAdd } from "react-icons/md";
import { MdHorizontalRule } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState({});

    const [quantity, setQuantity] = useState(1);

    const handleSetQuantity = (method) => {
        if (quantity > productDetails.available) {setQuantity(productDetails.available); return;}
            else if (quantity < 1) {setQuantity(1); return;}

        if (method == 'increase') (quantity + 1 == productDetails.available + 1) ? null : setQuantity(quantity + 1);
            else if (method == 'decrease') (quantity - 1 == 0) ? null : setQuantity(quantity - 1);
    }

    useEffect(() => {
        setProductDetails(ProductData[id]);
    }, []);


    return (
        <div className='w-[90vw] mx-auto flex flex-col gap-4'>
            {/* Hero Section */}
            <div className='bg-white p-2 flex flex-col md:flex-row rounded-md'>
                <div className='flex-1 flex justify-center items-center rounded-md overflow-hidden'>
                    <img src={`${productDetails.imagePath}`}/>
                </div>

                <div className='flex-1'>
                    {/* Header */}
                    <div>
                        <h3 className='text-2xl font-bold p-2'>{productDetails.productName}</h3>

                        <div className='flex flex-row gap-4 text-text/75 font-medium'>
                            <h5>Stars: {productDetails.rating}</h5>
                            <h5>Ratings: {productDetails.ratingCount}</h5>
                            <h5>Sold: {productDetails.sold}</h5>
                        </div>
                    </div>

                    {/* Price */}

                    <div className='m-2 p-4 bg-main-60/50 text-accent-10 font-bold text-xl rounded-md'>
                        PHP {productDetails.productPrice % 1 === 0 ? productDetails.productPrice + '.00' : productDetails.productPrice}
                    </div>

                    {/* Quantity */}

                    <div className='p-4 text-text flex flex-row gap-1 mt-12'>
                        <h3 className='text-md text-text/50 mr-10'>Available</h3>
                        There are <h3 className={`font-medium ${productDetails.available > 10 ? 'text-accent-10' : 'text-red-500'}`}>{productDetails.available}</h3> units left.

                    </div>

                    <div className='w-min flex flex-row gap-2 p-4 items-center'>
                        <h3 className='text-md text-text/50 mr-10'>Quantity</h3>
                        <button onClick={() => handleSetQuantity('decrease')} className='aspect-square w-10 bg-text/10 rounded-sm flex justify-center items-center cursor-pointer'><MdHorizontalRule /></button>
                        <input className='aspect-square w-10 bg-text/10 rounded-sm flex justify-center items-center cursor-pointer text-center' value={quantity} onChange={(e) => setQuantity(e.target.value)} min={1} max={productDetails.available}/>
                        <button onClick={() => handleSetQuantity('increase')} className='aspect-square w-10 bg-text/10 rounded-sm flex justify-center items-center cursor-pointer'><MdAdd /></button>
                    </div>

                    {/* Options */}

                    <div className='p-4 flex flex-row-reverse md:flex-row gap-2 items-center mt-8'>
                        <button className='flex flex-row items-center gap-1 border-accent-10 border-2 text-accent-10 p-2 rounded-sm'><MdAddShoppingCart className='text-accent-10' /> Add to Cart</button>
                        <button className='p-2 rounded-sm bg-accent-10 text-white font-medium min-w-30'>Buy Now</button>

                        <h3 className='text-text/50 mr-auto md:ml-auto md:mr-0'>Report</h3>
                    </div>
                </div>
            </div>

            {/* Additional Information */}
            <div className='bg-white p-2 flex flex-col gap-4 rounded-md'>
                <div className='flex flex-row gap-1'>
                    <h3 className='text-text/50'>Category: </h3>

                    <h5 className='text-text font-medium'>{productDetails.category}</h5>
                </div>

                <div className='flex flex-row gap-1'>
                    <h3 className='text-text/50'>Seller: </h3>

                    <h5 className='text-text font-medium'>{productDetails.shipsFrom}</h5>
                </div>
            </div>

            <div className='flex flex-row gap-2 ml-auto'>
                <button className='p-2 rounded-sm border-2 border-accent-10 text-accent-10 font-medium min-w-30' onClick={() => navigate(`/products/${id}/specs`)}>Specs</button>
                <button className='p-2 rounded-sm border-2 border-accent-10 text-accent-10 font-medium min-w-30' onClick={() => navigate('/products')}>Back</button>
            </div>
        </div>
    )
}

export default ProductDetails