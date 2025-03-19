'use client'

import { ProductSpecification } from '@/interfaces/product.interface'

interface ProductSpecificationRendererProps {
    specifications?: ProductSpecification[]
}

export default function ProductSpecificationRenderer({
    specifications = [],
}: ProductSpecificationRendererProps) {
    if (!specifications.length) {
        return <p className='text-customGray-500 text-sm mt-4'>Keine Daten</p>
    }

    return (
        <div className='w-full grid grid-cols-4 gap-y-4'>
            {specifications.map((spec, index) => (
                <div key={index} className='flex flex-col'>
                    <span className='text-customGray-500 text-sm font-normal'>
                        {spec.key}:
                    </span>
                    <span className='text-customGray-700 text-sm font-medium'>
                        {spec.value}
                    </span>
                </div>
            ))}
        </div>
    )
}
