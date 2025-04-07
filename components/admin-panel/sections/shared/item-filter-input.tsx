import CustomInput from '@/components/ui/custom-input/custom-input'
import { useEffect, useState } from 'react'

interface ItemSearchProps {
    onSearch: (value: string) => void
    placeholder: string
}

export default function ItemSearch({ onSearch, placeholder }: ItemSearchProps) {
    const [searchValue, setSearchValue] = useState('')

    const [debouncedSearch, setDebouncedSearch] = useState(searchValue)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(searchValue)
        }, 700)

        return () => {
            clearTimeout(handler)
        }
    }, [searchValue])

    useEffect(() => {
        if (debouncedSearch === '') {
            onSearch('')
        } else if (debouncedSearch) {
            onSearch(debouncedSearch)
        }
    }, [debouncedSearch, onSearch])

    const handleSearchChange = (value: string) => {
        setSearchValue(value)
    }

    return (
        <CustomInput
            type='text'
            onChange={(e) => handleSearchChange(e.target.value)}
            value={searchValue}
            placeholder={placeholder}
        />
    )
}
