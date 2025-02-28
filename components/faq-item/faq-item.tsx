'use client'

import { useState } from 'react'

interface FAQItemProps {
    question: string
    answer: string
}

export default function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='border-b border-gray-300'>
            <button
                className='w-full flex justify-between items-center py-4 text-left'
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className='text-[18px] font-semibold text-primary'>
                    {question}
                </span>
                <span className='text-[24px] text-gray-500 transition-transform duration-700'>
                    {isOpen ? '−' : '+'}
                </span>
            </button>

            <div
                className={`overflow-hidden transition-all duration-700 ${
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <p className='text-gray-600 text-[16px] leading-[24px] pb-4'>
                    {answer}
                </p>
            </div>
        </div>
    )
}
