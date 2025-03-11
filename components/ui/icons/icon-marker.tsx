interface IconProps {
    className?: string
}

export function MarkerIcon({ className }: IconProps) {
    return (
        <svg
            width='10'
            height='12'
            viewBox='0 0 10 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
        >
            <path
                d='M9.66634 12L4.99967 8.66667L0.333008 12V1.33333C0.333008 0.979711 0.473484 0.640573 0.723532 0.390524C0.973581 0.140476 1.31272 0 1.66634 0H8.33301C8.68663 0 9.02577 0.140476 9.27582 0.390524C9.52587 0.640573 9.66634 0.979711 9.66634 1.33333V12Z'
                fill='#667085'
            />
        </svg>
    )
}
