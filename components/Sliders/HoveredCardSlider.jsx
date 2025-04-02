import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

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
        slideRef.current = setInterval(()=> {
            setCurr((prev) => (prev + 1)% thumbImages.length)
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
                <button onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    prev();
                }} className='bg-gray-400 p-2 rounded-tr-md rounded-br-md'>
                    <FontAwesomeIcon icon={faChevronLeft} className='text-white font-bold' />
                </button>

                <button onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    next();
                }} className='bg-gray-400 p-2 rounded-tl-md rounded-bl-md'>
                    <FontAwesomeIcon icon={faChevronRight} className='text-white font-bold' />
                </button>
            </div>

            <div className='absolute w-full ml-10 bottom-4 right-0 left-0 align-middle'>
                <div className='max-w-20 h-4 flex items-center justify-center gap-2 bg-slate-200 rounded-full mx-10'>
                    {
                        thumbImages.map((_, idx) => (
                            <div className={`transition-all w-[4px] h-[4px] bg-secondary rounded-full ${curr === idx ? "w-[16px] h-[5px]" : "bg-opacity-50"}`}>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HoveredCardSlider
