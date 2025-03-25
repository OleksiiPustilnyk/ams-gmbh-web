// my to test and delete
import CustomMultiSelect from '@/components/ui/admin/links/custom-multi-select/custom-multi-select'
import { useState, useEffect } from 'react'

interface ProductOption {
    value: string
    label: string
}

interface RelatedProductsSelectProps {
    value: string[]
    onChange: (ids: string[]) => void
    searchable?: boolean
}

// to do to delete
const testProducts = [
    { id: '1', name: 'Product 1', articleNumber: 'ART001' },
    { id: '2', name: 'Product 2', articleNumber: 'ART002' },
    { id: '3', name: 'Product 3', articleNumber: 'ART003' },
    { id: '4', name: 'Product 4', articleNumber: 'ART004' },
    { id: '5', name: 'Product 5', articleNumber: 'ART005' },
]

export default function RelatedProductsSelect({
    value,
    onChange,
    searchable = true,
}: RelatedProductsSelectProps) {
    const [options, setOptions] = useState<ProductOption[]>([])

    const [searchTerm, setSearchTerm] = useState('')
    // const debouncedSearch = useDebounce(searchTerm, 300)

    // to do to delete
    // test useEffect
    useEffect(() => {
        const productOptions = testProducts.map((p) => ({
            value: p.id,
            label: `${p.name} (${p.articleNumber})`,
        }))
        setOptions(productOptions)
    }, [])
    ////////// end

    // const debouncedSearch = useDebounce(searchTerm, 300)

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const products = await searchProducts(debouncedSearch)
    //         const productOptions = products.map((p) => ({
    //             value: p._id,
    //             label: `${p.name} (${p.articleNumber})`,
    //         }))
    //         setOptions(productOptions)
    //     }
    //     fetchProducts()
    // }, [debouncedSearch])

    return (
        // <CustomMultiSelect
        //     label='Related products'
        //     options={options}
        //     value={value}
        //     onChange={onChange}
        // />
        <CustomMultiSelect
            label='Пов’язані товари'
            options={options}
            value={value}
            onChange={onChange}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            searchable={searchable}
        />
    )
}
