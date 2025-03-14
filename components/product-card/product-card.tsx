'use client'

import Image from 'next/image'
import { useState } from 'react'
import CustomButton from '../ui/buttons/custom-button'
import ProductCardDescription from './product-card-description'

interface ProductCardProps {
    title: string
    imageUrl: string
    altText: string
    price: string
    oldPrice?: string
    description?: string
}

export default function ProductCard({
    title,
    imageUrl,
    altText,
    price,
    oldPrice,
    description,
}: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className='relative flex flex-col items-start bg-white p-4 transition-all'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='w-full cursor-pointer'>
                <Image
                    src={imageUrl}
                    alt={altText}
                    width={300}
                    height={250}
                    className='object-cover w-full h-auto rounded-md'
                />
            </div>

            <h3 className='mt-4 text-base font-semibold text-customGray-700 text-start'>
                {title}
            </h3>

            <div className='flex flex-col flex-grow lg:justify-end my-4 lg:my-0 h-auto w-full max-h-16 md:max-h-12 sm:min-h-0'>
                <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-full'>
                    <div className='flex flex-col items-start'>
                        {oldPrice ? (
                            <span className='text-customGray-700 line-through text-xs leading-3 font-normal'>
                                {oldPrice}
                            </span>
                        ) : (
                            <span className='invisible text-xs leading-3'>
                                ----
                            </span>
                        )}
                        <div className='flex items-center'>
                            <span
                                className={`text-xl font-semibold ${
                                    oldPrice
                                        ? 'text-customRed-600'
                                        : 'text-customGray-700'
                                }`}
                            >
                                {price}
                            </span>
                            <span className='text-customGray-700 text-xs font-normal ml-2 self-center'>
                                per meter
                            </span>
                        </div>
                    </div>
                    <CustomButton className='sm:mt-0 sm:ml-4 w-full sm:w-auto'>
                        Add to cart
                    </CustomButton>
                </div>
            </div>

            <ProductCardDescription
                isHovered={isHovered}
                oldPrice={oldPrice}
                description={description}
            />
        </div>
    )
}
