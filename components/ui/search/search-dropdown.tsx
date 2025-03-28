'use client'

import { useState } from 'react'
import SearchInput from '../custom-search-input/custom-search-input'

interface Props {
    onClose: () => void
}

export default function SearchDropdown({ onClose }: Props) {
    const [query, setQuery] = useState('')

    const handleSubmit = () => {
        console.log('Search:', query)
        onClose()
    }

    return (
        <div className='bg-white border border-customGray-200 rounded-lg shadow-lg p-4'>
            <SearchInput
                value={query}
                onChange={setQuery}
                onSubmit={handleSubmit}
                placeholder='Was suchen Sie?'
            />
        </div>
    )
}
