import React, {useState, useEffect} from 'react'
import ProductGrid from './ProductGrid'

const formatKey = (string) => string.replace(/([A-Z])/g, " $1")     
                                .replace(/_/g, " ")            
                                .trim()
                                .replace(/^\w/, c => c.toUpperCase()); 
    


const ProductSpecsCard = ({productSpecs}) => {

    const listProductSpecs = Object.entries(productSpecs ?? {}).map(([key, value]) => 
        <div key={key} className='flex flex-row gap-2'>
            <h5 className='text-text/50 font-medium'>{formatKey(key)} : </h5>
            <h5 className='text-text font-semibold'>{value}</h5>
        </div>
    )

    return (
        <div className='flex flex-col gap-2 shadow-sm p-2 rounded-sm'>
            {listProductSpecs}
        </div>
    )
}

export default ProductSpecsCard
