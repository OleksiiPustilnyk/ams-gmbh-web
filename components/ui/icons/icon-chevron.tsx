import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number
}

export const ChevronIcon: React.FC<IconProps> = ({
    size = 12,
    className = 'text-current',
    ...props
}) => (
    <svg
        width={size}
        height={(size * 7) / 12}
        viewBox='0 0 12 7'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        {...props}
    >
        <path
            d='M1 1L6 6L11 1'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
)
