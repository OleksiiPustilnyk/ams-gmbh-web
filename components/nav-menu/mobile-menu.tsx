'use client'

import { navLinks } from '@/constants/nav-links'

export default function MobileMenu() {
    return (
        <nav className='md:hidden bg-white border-t shadow-lg p-4 absolute w-full'>
            <ul className='flex flex-col gap-4 text-gray-800'>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            className='block py-2 text-lg font-medium hover:text-yellow-600 transition'
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
