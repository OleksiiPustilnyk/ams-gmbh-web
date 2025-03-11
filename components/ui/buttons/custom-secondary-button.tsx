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
    borderColor = 'border-borderColor',
    textSize = 'text-xs',
    onClick,
    disabled = false,
    className = '',
}: CustomSecondaryButtonProps) {
    const borderClass = borderColor ? `border ${borderColor}` : ''
    const disabledBorder = borderColor ? 'border-[#E4E7EC]' : 'border-none'

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center gap-2 px-3 py-1 rounded-md transition font-medium
                ${
                    disabled
                        ? ` text-gray-400 cursor-not-allowed ${disabledBorder}`
                        : `text-deepGray hover:border-[#FFCE4B] hover:bg-[#FFF3D3] active:bg-[#FFB41F] active:text-primary ${borderClass}`
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
