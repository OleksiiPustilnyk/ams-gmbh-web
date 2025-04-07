import { ReactNode } from 'react'
import Link from 'next/link'

interface CustomLinkProps {
    children: ReactNode
    className?: string
    bgColor?: string
    textColor?: string
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    href: string
}

export default function CustomLinkButton({
    children,
    className = '',
    bgColor = 'bg-customGray-800',
    textColor = 'text-white',
    leftIcon,
    rightIcon,
    href,
}: CustomLinkProps) {
    const linkClasses = `group flex items-center gap-2 px-6 py-2 rounded-md transition duration-200 font-medium 
        ${bgColor} ${textColor} hover:bg-customYellow-700 active:bg-customYellow-900
        ${className}`

    return (
        <Link href={href} className={linkClasses}>
            {leftIcon && <span>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className='ml-auto'>{rightIcon}</span>}
        </Link>
    )
}
