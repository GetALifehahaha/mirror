import React, {useState, useEffect} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MdOutlineSearch, MdClear } from "react-icons/md";
import {motion, AnimatePresence} from 'framer-motion'

const SearchBar = () => {

    const [initialLoad, setInitialLoad] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [hasCategory, setHasCategory] = useState(false);
    const [categoryQuery, setCategoryQuery] = useState("");
    const [hasMinPrice, setHasMinPrice] = useState(false);
    const [minPriceQuery, setMinPriceQuery] = useState('');
    const [hasMaxPrice, setHasMaxPrice] = useState(false);
    const [maxPriceQuery, setMaxPriceQuery] = useState('');
    const [sortQuery, setSortQuery] = useState('');
    const MotionOutlineSearch = motion.create(MdOutlineSearch);
    const [width, setWidth] = useState(window.innerWidth);
    

    const buttonVariants = {
        hover: {
            backgroundColor: "var(--color-accent-10)",
            color: "var(--color-main-60-light)"
        },
        click : {
            scale: 1.1
        }
    }

    const inputVariants = {
        initial: {
            y: 10,
            opacity: 0, 
        },
        show: {
            y: 0,
            opacity: 1,
        },
        exit: {
            y: -10,
            opacity: 0
        },
        hover: {
            backgroundColor: "var(--color-main-60-dark)"
        }
    }

    const buttonVariantsChild = {
        initial : {
            y: 20,
            opacity: 0
        },
        hover : {
            y: 0,
            opacity: 1
        },
        click : {
            scale: 1.1
        }
    }

    const applySearchQuery = () => {
        let params = {}
        if (searchQuery) params = {...params, q: searchQuery} 
        if (categoryQuery) params = {...params, cat: categoryQuery} 
        if (minPriceQuery) params = {...params, min: minPriceQuery} 
        if (maxPriceQuery) params = {...params, max: maxPriceQuery} 
        if (sortQuery) params = {...params, sort: sortQuery}

        setSearchParams(params);
    }

    const clearSearchQuery = () => {
        setSearchQuery(''); 
        setCategoryQuery(''); 
        setMinPriceQuery(''); 
        setMaxPriceQuery(''); 
        setSortQuery(''); 
        setHasCategory(false);
        setHasMinPrice(false);
        setHasMaxPrice(false);

        applySearchQuery();
    }


    useEffect(() => {if (initialLoad) {setInitialLoad(false); return;} applySearchQuery()}, [sortQuery]);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    useEffect(() => {applySearchQuery()}, [searchQuery, categoryQuery, minPriceQuery, maxPriceQuery, sortQuery])

    return (
        <div className='w-[90vw] rounded-xl mx-auto bg-main-60 flex flex-col overflow-hidden gap-4 px-8 py-4 shadow-xs'>
            {/* Search Input */}
            <div className="flex flex-row gap-8 text-xs md:text-md">
                <input 
                type="text" 
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className='bg-main-60-light shadow-md rounded-xl flex-1 px-4 py-2 
                            focus:border-text/10 focus:outline-none
                              hover:bg-main-60 ease-in duration-200' 
                />
                
                <motion.button 
                variants={buttonVariants}
                initial="initial"   
                whileHover="hover"
                whileTap="click"
                onClick={applySearchQuery}
                className='rounded-full bg-main-60-light shadow-md px-4 py-1 
                          text-accent-10 font-semibold flex flex-row justify-center 
                            items-center gap-4 basis-1/8 cursor-pointer'
                >Search
                <MotionOutlineSearch variants={buttonVariantsChild}/> 
                </motion.button>
            </div>

            {/* Search Parameters */}
            <div className='flex flex-row flex-wrap gap-2 text-xs md:text-md'>
                <AnimatePresence mode="wait" initial="false">
                    {hasCategory || width < 768 ? 
                    <motion.div 
                    className='relative'
                    layout
                    initial='initial'
                    animate='show'
                    exit='exit'
                    variants={inputVariants}>
                        <input type="text" value={categoryQuery} onChange={(e) => setCategoryQuery(e.target.value)} placeholder='Add Category'
                        className='bg-main-60-light shadow-md px-4 py-1 rounded-xl focus:outline-none'/>
                        <button onClick={() => {setHasCategory(false); setCategoryQuery("")}}
                        className='absolute right-2 top-1/4 text-text/50 font-medium cursor-pointer'><MdClear /></button>
                    </motion.div> 
                        : 
                    <motion.button onClick={() => setHasCategory(true)}
                    variants={inputVariants}
                    layout
                    initial='initial'
                    animate='show'
                    exit='exit'
                    whileHover='hover'
                    className='rounded-xl px-4 py-1 bg-main-60-light cursor-pointer shadow-sm text-text/75'
                    >Category</motion.button>    
                    }
                </AnimatePresence>

                <AnimatePresence mode="wait" initial="false">
                    {hasMinPrice || width < 768? 
                    <motion.div 
                    className='flex flex-row gap-2 relative'
                    layout
                    initial='initial'
                    animate='show'
                    exit='exit'
                    variants={inputVariants}>
                        <input type="number" value={minPriceQuery} onChange={(e) => setMinPriceQuery(e.target.value)} placeholder='Set Min Price'
                        className='bg-main-60-light shadow-md px-4 py-1 rounded-xl focus:outline-none'/>
                        <button onClick={() => {setHasMinPrice(false); setMinPriceQuery('')}}
                        className='absolute right-2 top-1/4 text-text/50 font-medium cursor-pointer'><MdClear /></button>
                    </motion.div> 
                    : 
                    <motion.button onClick={() => setHasMinPrice(true)}
                    className='rounded-xl px-4 py-1 bg-main-60-light cursor-pointer shadow-sm text-text/75'
                    layout
                    initial='initial'
                    animate='show'
                    exit='exit'
                    whileHover='hover'
                    variants={inputVariants}
                    >Min</motion.button>    
                    }
                </AnimatePresence>

                <AnimatePresence mode="wait" initial="false">
                    {hasMaxPrice || width < 768 ? 
                    <motion.div 
                    className='flex flex-row gap-2 relative'
                    layout
                    initial='initial'
                    animate='show'
                    exit='exit'
                    variants={inputVariants}>
                        <input type="number" value={maxPriceQuery} onChange={(e) => setMaxPriceQuery(e.target.value)} placeholder='Max Price'
                        className='bg-main-60-light shadow-md px-4 py-1 rounded-xl focus:outline-none'/>
                        <button onClick={() => {setHasMaxPrice(false); setMaxPriceQuery('')}}
                        className='absolute right-2 top-1/4 text-text/50 font-medium cursor-pointer'><MdClear /></button>
                    </motion.div> 
                    : 
                    <motion.button onClick={() => setHasMaxPrice(true)}
                    className='rounded-xl px-4 py-1 bg-main-60-light cursor-pointer shadow-sm text-text/75'
                    layout
                    initial='initial'
                    animate='show'
                    exit='exit'
                    whileHover='hover'
                    variants={inputVariants}
                    >Max</motion.button>    
                    }
                </AnimatePresence>

                <motion.select 
                className='ml-auto rounded-xl px-4 py-1 bg-main-60-light cursor-pointer shadow-sm text-text/75'
                layout 
                onChange={e => setSortQuery(e.target.value)}>
                    <option value="" className='mt-2'>Sort</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                </motion.select>
                
                {   
                    (searchQuery || categoryQuery || minPriceQuery || maxPriceQuery || sortQuery || searchParams.size != 0) &&
                    <button 
                    className='font-medium text-text/25 px-4 hover:underline hover:underline-text/25 hover:underline-offset-1 cursor-pointer ml-auto' 
                    onClick={clearSearchQuery}
                    >Clear</button>
                }
            </div>
            
        </div>
    )
}

export default SearchBar