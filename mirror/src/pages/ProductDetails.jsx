import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Outlet, useLocation } from 'react-router-dom'
import ProductData from '../data/ProductData'
import { MdAdd, MdHorizontalRule, MdAddShoppingCart } from "react-icons/md";
import { ProductDetailsHeaderCard, ProductDetailsPriceCard, ProductDetailsQuantityCard, 
    ProductDetailsAdditionalInformationCard, Breadcrumbs, NotificationPopup  } from '../components';
import {motion, AnimatePresence} from 'framer-motion'

const ProductDetails = ({onCartChange}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState({});
    const [popupMessage, setPopupMessage] = useState("");
    const [isNotificationPopupShown, setIsNotificationPopupShown] = useState(false);

    const MotionAddShopCart = motion.create(MdAddShoppingCart);

    const location = useLocation();
    const isInSpecs = location.pathname.includes('/specs')

    const [quantity, setQuantity] = useState(1);

    const handleSetQuantity = (method) => {
        if (quantity > productDetails.available) {setQuantity(productDetails.available); return;}
            else if (quantity < 1) {setQuantity(1); return;}

        if (method == 'increase') (quantity + 1 == productDetails.available + 1) ? null : setQuantity(quantity + 1);
            else if (method == 'decrease') (quantity - 1 == 0) ? null : setQuantity(quantity - 1);
    }

    const buttonVariants = {
        hover: {
            backgroundColor: 'var(--color-accent-10)',
            color: 'var(--color-main-60-light)',
        }
    }

    const buttonIconVariants = {
        initial: {
            y: 5,
            opacity: 0
        },
        hover: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: -5,
            opacity: 0
        }
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
        const cartData = JSON.parse(localStorage.getItem("cartData")) || [];

        let isProductInCart = false;

        const updatedCartData = cartData.map(product => {
            if (product.id === id) {
            isProductInCart = true;
            return { ...product, amount: product.amount + quantity };
            }
            return product;
        });

        if (!isProductInCart) {
            updatedCartData.push({ id, amount: quantity });
        }

        localStorage.setItem("cartData", JSON.stringify(updatedCartData));
        onCartChange();
        handleShowPopup("Item added to cart!")
    }

    const breadcrumbs = [
        {name: 'Products', path: `/products`},
        {name: productDetails.category, path: `/products/?cat=${productDetails.category}`},
        {name: productDetails.productName, path: `/products/${id}`},
    ]

    useEffect(() => {
        setProductDetails(binarySearch());
    }, []);

    const handleShowPopup = (message) => {
        setPopupMessage(message);

        setIsNotificationPopupShown(true);

        setTimeout(() => {
            setIsNotificationPopupShown(false);
        }, 3000)
    };


    return (
        <div className='w-[90vw] mx-auto flex flex-col gap-4'>
            <Breadcrumbs initialBreadcrumbs={breadcrumbs}/>
            {/* Hero Section */}
            <div className='bg-main-60 p-4 gap-4 flex flex-col md:flex-row rounded-md'>
                {/* Image */}
                <div className='flex-1 flex justify-center items-center bg-main-60-light shadow-md rounded-sm overflow-hidden'>
                    <img src={`${productDetails.imagePath}`} className='rounded-md max-h-[400px] object-contain'/>
                </div>

                <div className='flex-1 flex flex-col justify-between'>
                    {/* Header */}
                    <ProductDetailsHeaderCard productDetails={{productName: productDetails.productName, 
                                                                rating: productDetails.rating,
                                                                ratingCount: productDetails.ratingCount,
                                                                sold: productDetails.sold}} />

                    {/* Price */}
                    <ProductDetailsPriceCard productDetails={{productPrice: productDetails.productPrice}} />

                    {/* Quantity */}
                    <ProductDetailsQuantityCard productDetails={{available: productDetails.available}} />

                    <div className='w-fit flex flex-row gap-2 p-4 items-center'>
                        <h3 className='text-md text-text/50 mr-10'>Quantity</h3>
                        <button onClick={() => handleSetQuantity('decrease')} className='aspect-square w-10 bg-main-60-light shadow-sm rounded-sm flex justify-center items-center cursor-pointer hover:bg-main-60-dark'><MdHorizontalRule /></button>
                        <input className='aspect-square w-10 bg-main-60-light shadow-sm rounded-sm flex justify-center items-center cursor-pointer text-center hover:bg-main-60-dark' value={quantity} onChange={(e) => setQuantity(e.target.value)} min={1} max={productDetails.available}/>
                        <button onClick={() => handleSetQuantity('increase')} className='aspect-square w-10 bg-main-60-light shadow-sm rounded-sm flex justify-center items-center cursor-pointer hover:bg-main-60-dark'><MdAdd /></button>
                    </div>

                    {/* Options */}
                    <motion.div 
                    className='flex ml-auto gap-2 items-center'>
                        {/* Add to Cart */}
                        <motion.button 
                        className=' flex flex-row items-center gap-2 border-accent-10 border-2 text-accent-10 px-4 py-2 rounded-xl cursor-pointer font-semibold'
                        onClick={() => addToCart()}
                        variants={buttonVariants}
                        initial='initial'
                        whileHover='hover'
                        >
                            <motion.h1
                            >
                                Add to Cart
                            </motion.h1>
                            <MotionAddShopCart 
                            variants={buttonIconVariants} className='text-main-60-light font-semibold'/>
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Additional Information */}
            <ProductDetailsAdditionalInformationCard productDetails={{category: productDetails.category,
                                                                        shipsFrom: productDetails.shipsFrom,
                                                                        }}/>

            { (isInSpecs) ? 
                <button 
                onClick={() => navigate(`/products/${id}`)}
                className='font-semibold text-sm ml-auto text-text/50 hover:text-text ease-in duration-100 cursor-pointer'>
                    Hide Specs
                </button> 
                :
                <button 
                onClick={() => navigate(`/products/${id}/specs`)}
                className='font-semibold text-sm ml-auto text-text/50 hover:text-text ease-in duration-100 cursor-pointer'>
                    View Specs
                </button> 
            }
                                                                        
            <Outlet>
            </Outlet>

            <AnimatePresence>
            { isNotificationPopupShown && 
                    <NotificationPopup message={popupMessage} />
                }
            </AnimatePresence>
        </div>
    )
}

export default ProductDetails