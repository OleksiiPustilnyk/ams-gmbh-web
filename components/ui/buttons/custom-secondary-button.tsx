import { ReactNode } from 'react'

interface CustomSecondaryButtonProps {
    text: string
    icon?: ReactNode
    iconPosition?: 'left' | 'right'
    borderColor?: string
    textSize?: string
    onClick?: () => void
    disabled?: boolean
    className?: string
}

export default function CustomSecondaryButton({
    text,
    icon,
    iconPosition = 'right',
    borderColor = 'border-customGray-300',
    textSize = 'text-xs',
    onClick,
    disabled = false,
    className = '',
}: CustomSecondaryButtonProps) {
    const borderClass = borderColor ? `border ${borderColor}` : ''
    const disabledBorder = borderColor ? 'border-customGray-200' : 'border-none'

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center gap-2 px-3 py-1 rounded-md transition font-medium
                ${
                    disabled
                        ? ` text-customGray-400 cursor-not-allowed ${disabledBorder}`
                        : `text-customGray-600 hover:border-customYellow-400 hover:bg-customYellow-100 active:bg-customYellow-600 active:text-customGray-700 ${borderClass}`
                }
                ${textSize} ${className}
            `}
        >
            {icon && iconPosition === 'left' && <span>{icon}</span>}
            <span>{text}</span>
            {icon && iconPosition === 'right' && <span>{icon}</span>}
        </button>
    )
}
