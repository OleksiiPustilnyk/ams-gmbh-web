'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Breadcrumbs() {
    const pathname = usePathname()
    const pathSegments = pathname.split('/').filter(Boolean)

    const customNames: Record<string, string> = {
        home: 'Home',
        profile: 'Price inquiry for commercial customers',
        catalog: 'Produktkatalog für Privatkunden',
        about: 'Über uns',
        contact: 'Kontakt',
    }

    return (
        <nav className='text-gray-500 text-[14px]'>
            <ul className='flex items-center gap-2'>
                <li>
                    <Link href='/' className='hover:underline text-gray-600'>
                        Home
                    </Link>
                </li>
                {pathSegments.map((segment, index) => {
                    const isLast = index === pathSegments.length - 1
                    const href =
                        '/' + pathSegments.slice(0, index + 1).join('/')
                    const name = customNames[segment] || segment

                    return (
                        <li key={segment} className='flex items-center'>
                            <span className='mx-2 text-gray-400'>{'>'}</span>
                            {isLast ? (
                                <span className='text-gray-600'>{name}</span>
                            ) : (
                                <Link
                                    href={href}
                                    className='hover:underline text-gray-600'
                                >
                                    {name}
                                </Link>
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
