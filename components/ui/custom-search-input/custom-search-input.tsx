'use client'

import { SearchIcon } from '../icons/icon-search'

interface SearchInputProps {
    value: string
    onChange: (value: string) => void
    onSubmit: () => void
    placeholder?: string
    className?: string
}

export default function SearchInput({
    value,
    onChange,
    onSubmit,
    placeholder = 'Was suchen Sie?',
    className = '',
}: SearchInputProps) {
    return (
        <div
            className={`flex items-center w-full border border-customGray-200 rounded-md overflow-hidden shadow-sm ${className}`}
        >
            <div className='pl-3 text-customGray-400'>
                <SearchIcon className='w-5 h-5' />
            </div>
            <input
                type='text'
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className='flex-1 px-3 py-2 text-sm outline-none bg-white text-customGray-800'
            />
            <button
                onClick={onSubmit}
                className='px-4 py-2 bg-customGray-100 text-sm font-semibold text-customGray-700 hover:bg-customGray-200 transition'
            >
                Suche
            </button>
        </div>
    )
}
