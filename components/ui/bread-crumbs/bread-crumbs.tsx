'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronIcon } from '../icons/icon-chevron'
import { breadcrumbNames } from '@/constants/breadcrumb-names'
import { useEffect, useState } from 'react'

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

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const renderSegment = (segment: string, index: number, isLast: boolean) => {
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
                <ChevronIcon className='mx-2 -rotate-90 w-3 h-3' />
                {isLast ? (
                    <span className='text-customGray-700 font-medium'>
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
    }

    const visibleSegments =
        isMobile && pathSegments.length >= 4
            ? [pathSegments[pathSegments.length - 1]]
            : pathSegments

    return (
        <nav className='text-customGray-500 text-sm'>
            <ul className='flex items-center flex-wrap'>
                {/* FIXME: not working  */}
                {!isMobile || pathSegments.length < 4 ? (
                    <>
                        <li>
                            <Link
                                href='/'
                                className='text-customGray-700 hover:underline'
                            >
                                Home
                            </Link>
                        </li>
                        {visibleSegments.map((segment, index) =>
                            renderSegment(
                                segment,
                                pathSegments.indexOf(segment),
                                index === visibleSegments.length - 1,
                            ),
                        )}
                    </>
                ) : (
                    <li className='flex items-center'>
                        <ChevronIcon className='mx-2 -rotate-90 w-3 h-3' />
                        <span className='text-customGray-700 font-medium'>
                            {productTitle}
                        </span>
                    </li>
                )}
            </ul>
        </nav>
    )
}
