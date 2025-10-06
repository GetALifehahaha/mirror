import React, {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState("");
    const [hasCategory, setHasCategory] = useState(false);
    const [categoryQuery, setCategoryQuery] = useState("");
    const [hasMinAmount, setHasMinAmount] = useState(false);
    const [minQuery, setMinQuery] = useState(0);
    const [hasMaxAmount, setHasMaxAmount] = useState(false);
    const [maxQuery, setMaxQuery] = useState(0);
    const [sortQuery, setSortQuery] = useState('');

    const applySearchQuery = () => {
        let params = {}
        if (searchQuery) params = {...params, q: searchQuery} 
        if (categoryQuery) params = {...params, cat: categoryQuery} 
        if (minQuery) params = {...params, min: minQuery} 
        if (maxQuery) params = {...params, max: maxQuery} 
        if (sortQuery) params = {...params, sort: sortQuery}

        setSearchParams(params);
    }

    return (
        <div className='w-[90vw] rounded-sm mx-auto py-8 px-20 bg-white flex flex-col gap-2'>
            <div className="flex flex-row gap-8">
                <input 
                type="text" 
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className='border-1 border-text/25 rounded-xl flex-1 px-4 py-1'
                />
                <button 
                onClick={applySearchQuery}
                className='rounded-xl bg-accent-10 px-4 py-1 text-white font-semibold'
                >Search</button>
            </div>
            <div className='flex flex-row gap-2 p-2'>
                {hasCategory ? 
                <div className='flex flex-row gap-2'>
                    <input type="text" value={categoryQuery} onChange={(e) => setCategoryQuery(e.target.value)} className='border-b-1 border-text/25 px-2'/>
                    <button onClick={() => {setHasCategory(false); setCategoryQuery("")}}>X</button>
                </div> : <button onClick={() => setHasCategory(true)}>Category</button>    
                }
                {hasMinAmount ? 
                <div className='flex flex-row gap-2'>
                    <input type="number" value={minQuery} onChange={(e) => setMinQuery(e.target.value)} className='border-b-1 border-text/25 px-2'/>
                    <button onClick={() => {setHasMinAmount(false); setMinQuery(0)}}>X</button>
                </div> : <button onClick={() => setHasMinAmount(true)}>Min Price</button>    
                }
                {hasMaxAmount ? 
                <div className='flex flex-row gap-2'>
                    <input type="number" value={maxQuery} onChange={(e) => setMaxQuery(e.target.value)} className='border-b-1 border-text/25 px-2'/>
                    <button onClick={() => {setHasMaxAmount(false); setMaxQuery(0)}}>X</button>
                </div> : <button onClick={() => setHasMaxAmount(true)}>Max Price</button>    
                }

                <select className='ml-auto' onChange={(e) => setSortQuery(e.target.value)}>
                    <option value=''>Sort</option>
                    <option value='price'>Price</option>
                    <option value='rating'>Rating</option>
                </select>

                <button onClick={() => setSearchParams({})}>Clear</button>
            </div>
            
        </div>
    )
}

export default SearchBar