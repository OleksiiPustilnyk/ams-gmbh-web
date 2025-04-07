'use client'

import { usePathname } from 'next/navigation'

interface AdminNavItemProps {
    name: string
    href: string
}

export default function AdminNavItem({ name, href }: AdminNavItemProps) {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <li className='relative'>
            <a
                href={href}
                className={`relative block pb-1 
                    after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] 
                    after:transition-all after:duration-300
                    ${
                        isActive
                            ? 'after:w-full after:bg-customYellow-500 font-bold'
                            : 'after:w-0 hover:after:w-full hover:after:bg-customGray-700'
                    }`}
            >
                {name}
            </a>
        </li>
    )
}
