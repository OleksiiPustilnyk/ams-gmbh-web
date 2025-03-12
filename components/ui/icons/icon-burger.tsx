interface IconProps {
    className?: string
}

export function BurgerIcon({ className }: IconProps) {
    return (
        <svg
            width='18'
            height='12'
            viewBox='0 0 18 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
        >
            <path
                d='M1.5 6H13.1667M1.5 1H16.5M1.5 11H16.5'
                stroke='#667085'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}
