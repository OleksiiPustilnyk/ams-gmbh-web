'use client'

import { adminNavLinks } from '@/constants/admin/admin-nav-links'
import NavLink from './admin-nav-item'

export default function AdminNavMenu() {
    return (
        <nav>
            <ul className='flex gap-6 text-customGray-700'>
                {adminNavLinks.map((link) => (
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
