import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const HoveredCardSlider = ({ thumbImages }) => {

    const [curr, setCurr] = useState(0);
    const slideRef = useRef(null);

    const prev = () => {
        setCurr((curr) => (curr === 0 ? thumbImages.length - 1 : curr - 1));
    }

    const next = () => {
        setCurr((curr) => (curr === thumbImages.length - 1 ? 0 : curr + 1));
    }

    const startAutoSlide = () => {
        slideRef.current = setInterval(() => {
            setCurr((prev) => (prev + 1) % thumbImages.length)
        }, 3000)
    }

    const stopAutoSlide = () => {
        clearInterval(slideRef.current);
    }

    return (
        <div onMouseEnter={startAutoSlide} onMouseLeave={stopAutoSlide} className='relative overflow-hidden'>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
                {
                    thumbImages.map((thumb, idx) => (
                        <div key={idx} className='min-w-full'>
                            <Image src={thumb} alt='img' width={200} height={200} className='w-full h-full object-cover' />
                        </div>
                    ))
                }
            </div>

            <div className='flex absolute inset-0 justify-between items-center'>
                <motion.button
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        prev();
                    }} className='bg-gray-400 p-2 rounded-tr-md rounded-br-md'>
                    <FontAwesomeIcon icon={faChevronLeft} className='text-white font-bold' />
                </motion.button>

                <motion.button
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        next();
                    }} className='bg-gray-400 p-2 rounded-tl-md rounded-bl-md'>
                    <FontAwesomeIcon icon={faChevronRight} className='text-white font-bold' />
                </motion.button>
            </div>

            <motion.div

                initial={{ y: 3, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 3, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}

                className='absolute w-full ml-12 lg:ml-10 bottom-4 right-0 left-0 align-middle'>
                <div className='max-w-12 lg:max-w-20 h-2 lg:h-4 flex items-center justify-center gap-1 lg:gap-2 bg-slate-200 rounded-full lg:mx-10'>
                    {
                        thumbImages.map((_, idx) => (
                            <div key={idx} className={`transition-all w-[2px] lg:w-[4px] h-[2.2px] lg:h-[4px] bg-secondary rounded-full ${curr === idx ? "min-w-[8px] lg:min-w-[16px] w-[8px] lg:w-[16px] lg:h-[5px]" : "bg-opacity-50"}`}>
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </div>
    )
}

export default HoveredCardSlider
