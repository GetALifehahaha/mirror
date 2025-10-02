import React,{ useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ProductData from '../data/ProductData'
import { ProductDetailsCard, ProductSpecsCard } from '../components'

const ProductSpecs = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    
    const [productDetails, setProductDetails] = useState({});
    const [productSpecs, setProductSpecs] = useState({});

    useEffect(() => {
        setProductDetails(ProductData[id]);
    }, []);

    useEffect(() => {
        setProductSpecs(productDetails.specifications)
    }, [productDetails]);


    return (
        <div className='w-[90vw] rounded-sm bg-white p-4 mx-auto flex flex-col gap-4'>
            <h3 className='text-text/25 font-semibold text-sm'>Specification</h3>
            <ProductDetailsCard productDetails={productDetails}/>
            <ProductSpecsCard productSpecs={productSpecs} />

            <div className='flex flex-row gap-2 ml-auto'>
                <button className='p-2 rounded-sm border-2 border-accent-10 text-accent-10 font-medium min-w-30' onClick={() => navigate(`/products/${id}`)}>Back</button>
            </div>
        </div>
    )
}

export default ProductSpecs
