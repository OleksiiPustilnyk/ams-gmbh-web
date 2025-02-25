'use client'

import { navLinks } from '@/constants/nav-links'
import NavLink from './nav-link'

export default function NavMenu() {
    return (
        <nav>
            <ul className='flex gap-8 text-primary'>
                {navLinks.map((link) => (
                    <NavLink
                        key={link.name}
                        name={link.name}
                        href={link.href}
                    />
                ))}
            </ul>
        </nav>
    )
}
