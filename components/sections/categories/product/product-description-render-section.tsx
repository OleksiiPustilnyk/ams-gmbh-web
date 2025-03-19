'use client'

import Image from 'next/image'
import { ProductContentBlock } from '@/interfaces/product.interface'

interface ProductDescriptionRendererProps {
    content: ProductContentBlock[]
}

export default function ProductDescriptionRenderer({
    content = [],
}: ProductDescriptionRendererProps) {
    const textBlocks = content.filter((block) => block.type !== 'image')
    const imageBlock = content.find((block) => block.type === 'image')

    return (
        <div className='flex flex-col lg:flex-row gap-8 items-start'>
            <div className='lg:w-1/2 space-y-4'>
                {textBlocks.map((block, index) => {
                    if (block.type === 'heading') {
                        return (
                            <h2
                                key={index}
                                className='text-lg font-semibold text-customGray-700'
                            >
                                {block.content}
                            </h2>
                        )
                    }
                    if (block.type === 'text') {
                        return (
                            <p
                                key={index}
                                className='text-base font-normal text-customGray-700'
                            >
                                {block.content}
                            </p>
                        )
                    }
                    if (block.type === 'list' && block.items) {
                        return (
                            <ul key={index} className='space-y-2'>
                                {block.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className='flex items-center gap-3'
                                    >
                                        <span className='w-2 h-2 flex-shrink-0 self-center rounded-full bg-customYellow-600'></span>
                                        <span className='text-base font-normal text-customGray-700 leading-relaxed'>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                    return null
                })}
            </div>

            {imageBlock && (
                <div className='lg:w-1/2 flex justify-center lg:justify-end'>
                    <Image
                        src={imageBlock.src!}
                        alt='product-image'
                        width={560}
                        height={560}
                        className='w-full h-auto'
                    />
                </div>
            )}
        </div>
    )
}
