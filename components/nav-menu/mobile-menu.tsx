'use client'

import Link from 'next/link'
import Logo from '../logo/logo'
import CategoryDropdown from '../dropdown/category-dropdown'
import { navLinks } from '@/constants/nav-links'
import { CloseIcon } from '../ui/icons/icon-close'
import SearchInput from '../ui/custom-search-input/custom-search-input'
import { useState } from 'react'

interface MobileMenuProps {
    onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
    const [query, setQuery] = useState('')

    const handleSubmit = () => {
        console.log('Search:', query)
        onClose()
    }
    return (
        <div className='fixed top-16 left-0 w-5/6 md:w-1/2 h-[calc(100vh-64px)] bg-white shadow-lg p-6 overflow-y-auto z-50'>
            <div className='mb-6 flex justify-start'>
                <Logo />
            </div>
            <button
                onClick={onClose}
                className='absolute top-6 right-4 text-customGray-600'
            >
                <CloseIcon />
            </button>

            <SearchInput
                value={query}
                onChange={setQuery}
                onSubmit={handleSubmit}
                placeholder='Was suchen Sie?'
                className='mb-6'
            />

            <CategoryDropdown />

            <nav className='space-y-4 text-customGray-700 mt-6'>
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={onClose}
                        className='block hover:text-customGray-700 transition'
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}
