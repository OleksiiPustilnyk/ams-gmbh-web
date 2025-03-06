import { ReactNode } from 'react'

interface CustomButtonProps {
    children: ReactNode
    onClick?: () => void
    className?: string
    bgColor?: string
    textColor?: string
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    disabled?: boolean
}

export default function CustomButton({
    children,
    onClick,
    className = '',
    bgColor = 'bg-secondary',
    textColor = 'text-white',
    leftIcon,
    rightIcon,
    disabled = false,
}: CustomButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`group flex items-center gap-2 px-6 py-2 rounded-md transition duration-200 font-medium 
                ${
                    disabled
                        ? 'bg-[#E4E7EC] text-[#667085] cursor-not-allowed'
                        : `${bgColor} ${textColor} hover:bg-[#EE9907] active:bg-[#BD7904]`
                }
                ${className}
            `}
            disabled={disabled}
        >
            {leftIcon && <span>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className='ml-auto'>{rightIcon}</span>}
        </button>
    )
}
