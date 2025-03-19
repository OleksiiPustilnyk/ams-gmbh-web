'use client'

import { ProductAdditionalInfo } from '@/interfaces/product.interface'

interface ProductAdditionalInfoRendererProps {
    additionalInfo: ProductAdditionalInfo[]
}

export default function ProductAdditionalInfoRenderer({
    additionalInfo,
}: ProductAdditionalInfoRendererProps) {
    if (!additionalInfo || additionalInfo.length === 0) {
        return <p className='text-customGray-500'>Нет данных</p>
    }

    return (
        <div className='w-full'>
            {additionalInfo.map((info, index) => (
                <div
                    key={index}
                    className='grid grid-cols-1 md:grid-cols-2 gap-6 py-2'
                >
                    <div className='flex'>
                        <span className='text-customGray-500 font-normal text-sm mr-2'>
                            {info.key}:
                        </span>
                        <span className='text-customGray-700 font-medium text-sm'>
                            {info.value}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}
