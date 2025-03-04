import Link from 'next/link'
import { ReactNode } from 'react'

interface CustomLinkProps {
    href: string
    children: ReactNode
    className?: string
    textSize?: string
}

export default function CustomLink({
    href,
    children,
    className = '',
    textSize = 'text-[16px]',
}: CustomLinkProps) {
    return (
        <Link
            href={href}
            className={`group flex w-max items-center ${textSize} font-normal leading-[24px] text-gray-900 transition-colors 
                hover:text-[#EE9907] active:text-[#BD7904] ${className}`}
        >
            {children}
            <span className='relative ml-2 w-[16px] h-[16px] inline-block transition-transform duration-300 group-hover:translate-x-1'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    fill='currentColor'
                    className='w-full h-full transition-transform duration-300 ease-in-out 
                        -rotate-45 group-hover:rotate-0'
                >
                    <path
                        d='M1 8H15M15 8L8 1M15 8L8 15'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            </span>
        </Link>
    )
}
