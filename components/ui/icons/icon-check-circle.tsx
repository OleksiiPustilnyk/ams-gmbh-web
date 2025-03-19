interface IconProps {
    className?: string
}

export function CheckCircleIcon({ className }: IconProps) {
    return (
        <svg
            width='16'
            height='15'
            viewBox='0 0 16 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
        >
            <path
                d='M14.6667 6.88662V7.49995C14.6659 8.93756 14.2003 10.3364 13.3396 11.4878C12.4788 12.6393 11.2689 13.4816 9.89025 13.8892C8.51163 14.2968 7.03818 14.2479 5.68966 13.7497C4.34113 13.2515 3.18978 12.3307 2.40732 11.1247C1.62485 9.91864 1.2532 8.49199 1.34779 7.05749C1.44239 5.62299 1.99815 4.2575 2.9322 3.16467C3.86625 2.07183 5.12853 1.31021 6.5308 0.993381C7.93307 0.676557 9.40019 0.821508 10.7133 1.40662M14.6667 2.16662L8.00001 8.83995L6.00001 6.83995'
                stroke='#127334'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}
