'use client'

import { useState } from 'react'
import { SearchIcon } from '../icons/icon-search'
import SearchDropdown from './search-dropdown'

export default function SearchToggle() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='relative'>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='p-2 hover:bg-customGray-100 rounded-md transition'
                aria-label='Search'
            >
                <SearchIcon className='w-5 h-5' />
            </button>

            {isOpen && (
                <div className='absolute top-full right-0 mt-6 w-screen max-w-xl z-50'>
                    <SearchDropdown onClose={() => setIsOpen(false)} />
                </div>
            )}
        </div>
    )
}
