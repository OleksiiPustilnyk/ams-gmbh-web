interface CheckIconProps {
    className?: string
}

export function CheckIcon({ className }: CheckIconProps) {
    return (
        <svg
            width='12'
            height='9'
            viewBox='0 0 12 9'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
        >
            <path
                d='M10.6666 1L4.24992 7.41667L1.33325 4.5'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}
