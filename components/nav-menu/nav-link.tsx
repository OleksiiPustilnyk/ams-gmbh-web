'use client'

import { usePathname } from 'next/navigation'

interface NavLinkProps {
    name: string
    href: string
}

export default function NavLink({ name, href }: NavLinkProps) {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <li className='relative'>
            <a
                href={href}
                className={`relative block pb-1 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-defaultYellow after:transition-all after:duration-300 ${
                    isActive
                        ? 'after:w-full font-bold'
                        : 'after:w-0 hover:after:w-full'
                }`}
            >
                {name}
            </a>
        </li>
    )
}
