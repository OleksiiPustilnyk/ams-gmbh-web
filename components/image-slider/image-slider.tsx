'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { ChevronIcon } from '../ui/icons/icon-chevron'

interface ImageSliderProps {
    images: string[]
    altText: string
}

export default function ImageSlider({ images, altText }: ImageSliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            perView: 3,
            spacing: 8,
        },
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel)
        },
    })

    return (
        <div className='flex flex-col items-center'>
            <div className='max-w-lg mb-4'>
                <div className='w-full max-w-lg'>
                    <Image
                        src={images[currentSlide]}
                        alt={altText}
                        width={382}
                        height={382}
                        className='object-cover'
                    />
                </div>
            </div>

            <div className='relative w-[300px] md:w-[180px] lg:w-[340px] flex items-center justify-between'>
                <button
                    onClick={() => instanceRef.current?.prev()}
                    className='absolute left-[-30px] z-10 p-2'
                >
                    <ChevronIcon className='w-5 h-5 rotate-90 text-gray-600' />
                </button>

                <div className='w-[280px] md:w-[180px] lg:w-[280px] mx-auto'>
                    <div ref={sliderRef} className='keen-slider w-full'>
                        {images.map((img, idx) => (
                            <div
                                key={idx}
                                className='keen-slider__slide flex justify-center items-center cursor-pointer'
                                onClick={() => setCurrentSlide(idx)}
                                style={{
                                    width: '90px',
                                    height: '90px',
                                    maxWidth: '90px',
                                }}
                            >
                                <Image
                                    src={img}
                                    alt={altText}
                                    width={90}
                                    height={90}
                                    className='object-cover md:w-[50px] md:h-[50px] lg:w-full lg:h-full transition-all'
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => instanceRef.current?.next()}
                    className='absolute right-[-30px] z-10 p-2'
                >
                    <ChevronIcon className='w-5 h-5 -rotate-90 text-gray-600' />
                </button>
            </div>
        </div>
    )
}
