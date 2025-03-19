'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronIcon } from '../icons/icon-chevron'
import { breadcrumbNames } from '@/constants/breadcrumb-names'

interface BreadcrumbsProps {
    blogTitle?: string
    categoryTitle?: string
    productTitle?: string
    categorySlug?: string
}

export default function Breadcrumbs({
    blogTitle,
    categoryTitle,
    productTitle,
    categorySlug,
}: BreadcrumbsProps) {
    const pathname = usePathname()
    const pathSegments = pathname.split('/').filter(Boolean)

    return (
        <nav className='text-gray-500 text-sm'>
            <ul className='flex items-center gap-2'>
                <li>
                    <Link
                        href='/'
                        className='text-customGray-700 hover:underline'
                    >
                        Home
                    </Link>
                </li>
                {pathSegments.map((segment, index) => {
                    const isLast = index === pathSegments.length - 1
                    let href = '/' + pathSegments.slice(0, index + 1).join('/')

                    let name = breadcrumbNames[segment] || segment

                    if (pathSegments[0] === 'blog' && isLast) {
                        name = blogTitle || 'Blog'
                    }

                    if (pathSegments[0] === 'categories') {
                        if (index === 1) {
                            name = categoryTitle || name
                        } else if (index === 2) {
                            name = productTitle || 'Produkt'
                            href = `/categories/${categorySlug}`
                        }
                    }

                    return (
                        <li key={segment} className='flex items-center'>
                            <ChevronIcon className='mx-2 -rotate-90' />
                            {isLast ? (
                                <span className='text-customGray-700'>
                                    {name}
                                </span>
                            ) : (
                                <Link
                                    href={href}
                                    className='text-customGray-700 hover:underline'
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
