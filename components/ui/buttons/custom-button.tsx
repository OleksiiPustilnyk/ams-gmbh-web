import { ReactNode } from 'react'

interface CustomButtonProps {
    children: ReactNode
    onClick?: () => void
    className?: string
    bgColor?: string
    textColor?: string
    leftIcon?: ReactNode
    rightIcon?: ReactNode
}

export default function CustomButton({
    children,
    onClick,
    className = '',
    bgColor = 'bg-secondary',
    textColor = 'text-white',
    leftIcon,
    rightIcon,
}: CustomButtonProps) {
    const baseStyles = 'flex items-center gap-2 px-6 py-2 rounded-md transition'

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${bgColor} ${textColor} ${className}`}
        >
            {leftIcon && <span>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span>{rightIcon}</span>}
        </button>
    )
}
