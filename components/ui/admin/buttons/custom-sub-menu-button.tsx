import { ReactNode } from 'react'

interface SubMenuButtonProps {
    children: ReactNode
    onClick?: () => void
    isActive?: boolean
}

export default function SubMenuButton({
    children,
    onClick,
    isActive = false,
}: SubMenuButtonProps) {
    return (
        <button
            type='button'
            onClick={onClick}
            className={`relative pb-1 cursor-pointer ${
                isActive ? 'font-bold text-black' : 'text-black font-normal'
            } group`}
        >
            {children}
            <span
                className={`absolute left-0 bottom-[-4px] w-0 bg-customYellow-500 transition-all duration-300 ease-in-out
                    group-hover:w-full group-hover:bg-customGray-700
                    ${isActive ? 'w-full bg-customYellow-500' : ''}
                    h-[3px]`}
            />
        </button>
    )
}
