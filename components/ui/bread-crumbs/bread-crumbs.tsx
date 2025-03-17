'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronIcon } from '../icons/icon-chevron'
import { breadcrumbNames } from '@/constants/breadcrumb-names'

interface BreadcrumbsProps {
    blogTitle?: string
    productTitle?: string
}

export default function Breadcrumbs({
    blogTitle,
    productTitle,
}: BreadcrumbsProps) {
    const pathname = usePathname()
    const pathSegments = pathname.split('/').filter(Boolean)

    return (
        <nav className='text-gray-500 text-sm'>
            <ul className='flex items-center gap-2'>
                <li>
                    <Link href='/' className='text-customGray-500'>
                        Home
                    </Link>
                </li>
                {pathSegments.map((segment, index) => {
                    const isLast = index === pathSegments.length - 1
                    const isBlogPost = pathSegments[0] === 'blog' && isLast
                    const isProductPage =
                        pathSegments[0] === 'products' && isLast
                    const href =
                        '/' + pathSegments.slice(0, index + 1).join('/')

                    let name = breadcrumbNames[segment] || segment

                    if (isBlogPost) {
                        name = blogTitle || 'Blog Post'
                    } else if (isProductPage) {
                        name = productTitle || 'Produkt'
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
                                    className=' text-customGray-700'
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
