import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Outlet } from 'react-router-dom'
import ProductData from '../data/ProductData'
import { MdAdd } from "react-icons/md";
import { MdHorizontalRule } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { ProductDetailsHeaderCard, ProductDetailsPriceCard, ProductDetailsQuantityCard, ProductDetailsAdditionalInformationCard } from '../components';

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

    const binarySearch = () => {
        let start = 0;
        let end = ProductData.length - 1;

        while (start <= end) {
            let middle = Math.floor(start + (end - start) / 2);

            if (id == ProductData[middle].id) return ProductData[middle]

            if (id > ProductData[middle].id) start = middle + 1
            else if (id < ProductData[middle].id) end = middle - 1
        }

        return {}
    }

    const addToCart = () => {
        const cartData = JSON.parse(localStorage.getItem("cartData"));

        cartData.push({
            id,
            amount: quantity,
        })

        console.log(cartData)

        localStorage.setItem("cartData", JSON.stringify(cartData));
    }

    useEffect(() => {
        setProductDetails(binarySearch());
    }, []);


    return (
        <div className='w-[90vw] mx-auto flex flex-col gap-4'>
            {/* Hero Section */}
            <div className='bg-white p-2 flex flex-col md:flex-row rounded-md'>
                <div className='flex-1 flex justify-center items-center '>
                    <img src={`${productDetails.imagePath}`} className='rounded-md max-h-[400px] object-contain'/>
                </div>

                <div className='flex-1'>
                    {/* Header */}
                    {/* TODO: Turn to header card */}
                    <ProductDetailsHeaderCard productDetails={{productName: productDetails.productName, 
                                                                rating: productDetails.rating,
                                                                ratingCount: productDetails.ratingCount,
                                                                sold: productDetails.sold}} />

                    {/* Price */}
                    {/* TODO: Turn to price card */}

                    <ProductDetailsPriceCard productDetails={{productPrice: productDetails.productPrice}} />

                    {/* Quantity */}
                    {/* TODO: Turn to quantity card */}
                    <ProductDetailsQuantityCard productDetails={{available: productDetails.available}} />

                    <div className='w-min flex flex-row gap-2 p-4 items-center'>
                        <h3 className='text-md text-text/50 mr-10'>Quantity</h3>
                        <button onClick={() => handleSetQuantity('decrease')} className='aspect-square w-10 bg-text/10 rounded-sm flex justify-center items-center cursor-pointer'><MdHorizontalRule /></button>
                        <input className='aspect-square w-10 bg-text/10 rounded-sm flex justify-center items-center cursor-pointer text-center' value={quantity} onChange={(e) => setQuantity(e.target.value)} min={1} max={productDetails.available}/>
                        <button onClick={() => handleSetQuantity('increase')} className='aspect-square w-10 bg-text/10 rounded-sm flex justify-center items-center cursor-pointer'><MdAdd /></button>
                    </div>

                    {/* Options */}
                    {/* TODO: Turn to price card */}
                    <div className='p-4 flex flex-row-reverse md:flex-row gap-2 items-center mt-8'>
                        <button className='flex flex-row items-center gap-1 border-accent-10 border-2 text-accent-10 p-2 rounded-sm'
                        onClick={() => addToCart()}
                        ><MdAddShoppingCart className='text-accent-10' /> Add to Cart</button>
                        <button className='p-2 rounded-sm bg-accent-10 text-white font-medium min-w-30'>Buy Now</button>

                        <h3 className='text-text/50 mr-auto md:ml-auto md:mr-0'>Report</h3>
                    </div>
                </div>
            </div>

            {/* Additional Information */}
            {/* TODO: Turn to additional information card */}
            <ProductDetailsAdditionalInformationCard productDetails={{category: productDetails.category,
                                                                        shipsFrom: productDetails.shipsFrom,
                                                                        }}/>

            {/* TODO: Style the heck out of this */}
            <Outlet>

            </Outlet>
            <div className='flex flex-row gap-2 ml-auto'>
                <button className='p-2 rounded-sm border-2 border-accent-10 text-accent-10 font-medium min-w-30' onClick={() => navigate(`/products/${id}/specs`)}>Specs</button>
                <button className='p-2 rounded-sm border-2 border-accent-10 text-accent-10 font-medium min-w-30' onClick={() => navigate('/products')}>Back</button>
            </div>
        </div>
    )
}

export default ProductDetails