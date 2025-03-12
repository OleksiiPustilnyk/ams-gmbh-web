'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronIcon } from '../icons/icon-chevron'
// import { BlogArticle } from '@/types/blog'

interface BreadcrumbsProps {
    blogTitle?: string
}

export default function Breadcrumbs({ blogTitle }: BreadcrumbsProps) {
    const pathname = usePathname()
    const pathSegments = pathname.split('/').filter(Boolean)

    const customNames: Record<string, string> = {
        home: 'Home',
        profile: 'Price inquiry for commercial customers',
        catalog: 'Produktkatalog für Privatkunden',
        about: 'Über uns',
        blog: 'Blog',
        contact: 'Kontakt',
    }

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
                    const href =
                        '/' + pathSegments.slice(0, index + 1).join('/')
                    const name = isBlogPost
                        ? blogTitle || 'Blog Post'
                        : customNames[segment] || segment

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
