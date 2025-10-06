import React, {useState, useEffect} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MdOutlineSearch } from "react-icons/md";
import {motion, AnimatePresence} from 'framer-motion'

const SearchBar = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState("");
    const [hasCategory, setHasCategory] = useState(false);
    const [categoryQuery, setCategoryQuery] = useState("");
    const [hasMinAmount, setHasMinAmount] = useState(false);
    const [minQuery, setMinQuery] = useState();
    const [hasMaxAmount, setHasMaxAmount] = useState(false);
    const [maxQuery, setMaxQuery] = useState(0);
    const [sortQuery, setSortQuery] = useState('');

    const MotionOutlineSearch = motion.create(MdOutlineSearch);

    const buttonVariants = {
        hover: {
            backgroundColor: "var(--color-accent-10)",
            color: "var(--color-main-60-light)"
        },
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
        }
    }

    const buttonVariantsChild = {
        initial : {
            y: -100,
            opacity: 0
        },
        hover : {
            y: [100, 0],
            opacity: 1
        } 
    }

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
        <div className='w-[90vw] rounded-xl mx-auto bg-main-60 flex flex-col overflow-hidden gap-4 px-8 py-4 shadow-xs'>
            <div className="flex flex-row gap-8">
                <input 
                type="text" 
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className='bg-main-60-light shadow-md rounded-xl flex-1 px-4 py-2 focus:border-text/10 focus:outline-none' 
                />
                <motion.button 
                variants={buttonVariants}
                initial="initial"   
                whileHover="hover"
                onClick={applySearchQuery}
                className='rounded-full bg-main-60-light shadow-md px-4 py-1 text-accent-10 font-semibold flex flex-row justify-center items-center gap-4 basis-1/8 cursor-pointer'
                >Search
                <MotionOutlineSearch variants={buttonVariantsChild}/> 
                </motion.button>
            </div>
            <div className='flex flex-row gap-2'>
                <AnimatePresence mode="wait" initial="false">
                    {hasCategory ? 
                        <motion.div 
                        className='flex flex-row gap-2 relative'
                        initial='initial'
                        animate='show'
                        exit='exit'
                        variants={inputVariants}>
                            <input type="text" value={categoryQuery} onChange={(e) => setCategoryQuery(e.target.value)} 
                            className='bg-main-60-light shadow-md px-4 py-1 rounded-xl focus:outline-none'/>
                            <button onClick={() => {setHasCategory(false); setCategoryQuery("")}}
                            className='absolute right-2 top-1 text-text/50 font-medium cursor-pointer'>X</button>
                        </motion.div> 
                            : 
                        <motion.button onClick={() => setHasCategory(true)}
                        variants={inputVariants}
                        initial='initial'
                        animate='show'
                        exit='exit'
                        className='rounded-xl px-4 py-1 bg-main-60-light cursor-pointer shadow-sm text-text/75'
                        >Category</motion.button>    
                    }
                </AnimatePresence>

                <AnimatePresence mode="wait" initial="false">
                    {hasMinAmount ? 
                    <motion.div 
                    className='flex flex-row gap-2 relative'
                    initial='initial'
                    animate='show'
                    exit='exit'
                    variants={inputVariants}>
                        <input type="number" value={minQuery} onChange={(e) => setMinQuery(e.target.value)} 
                        className='bg-main-60-light shadow-md px-4 py-1 rounded-xl focus:outline-none'/>
                        <button onClick={() => {setHasMinAmount(false); setMinQuery()}}
                        className='absolute right-2 top-1 text-text/50 font-medium cursor-pointer'>X</button>
                    </motion.div> 
                    : 
                    <motion.button onClick={() => setHasMinAmount(true)}
                    className='rounded-xl px-4 py-1 bg-main-60-light cursor-pointer shadow-sm text-text/75'
                    initial='initial'
                    animate='show'
                    exit='exit'
                    variants={inputVariants}
                    >Min Price</motion.button>    
                    }
                </AnimatePresence>
            </div>
            
        </div>
    )
}

export default SearchBar