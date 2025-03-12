import { ReactNode } from 'react'
import Link from 'next/link'

interface CustomButtonProps {
    children: ReactNode
    onClick?: () => void
    className?: string
    bgColor?: string
    textColor?: string
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    disabled?: boolean
    centerText?: boolean
    href?: string
    type?: 'button' | 'submit' | 'reset'
}

export default function CustomButton({
    children,
    onClick,
    className = '',
    bgColor = 'bg-customGray-800',
    textColor = 'text-white',
    leftIcon,
    rightIcon,
    disabled = false,
    centerText = false,
    href,
    type = 'button',
}: CustomButtonProps) {
    const buttonClasses = `group flex items-center gap-2 px-6 py-2 rounded-md transition duration-200 font-medium 
        ${
            disabled
                ? 'bg-customGray-200 text-customGray-500 cursor-not-allowed'
                : `${bgColor} ${textColor} hover:bg-customYellow-700 active:bg-customYellow-900`
        }
        ${centerText ? 'justify-center' : ''} 
        ${className}`

    if (href) {
        return (
            <Link href={href} className={buttonClasses}>
                {leftIcon && <span>{leftIcon}</span>}
                <span>{children}</span>
                {rightIcon && <span className='ml-auto'>{rightIcon}</span>}
            </Link>
        )
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={buttonClasses}
            disabled={disabled}
        >
            {leftIcon && <span>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className='ml-auto'>{rightIcon}</span>}
        </button>
    )
}
