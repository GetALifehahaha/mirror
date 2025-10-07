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
        <div className='w-[90vw] rounded-sm bg-main-60 p-2 mx-auto mb-20 flex flex-col gap-4'>
            <h3 className='text-text/25 font-semibold text-sm'>Specification</h3>
            <ProductDetailsCard productDetails={productDetails}/>
            <ProductSpecsCard productSpecs={productSpecs} />
        </div>
    )
}

export default ProductSpecs
