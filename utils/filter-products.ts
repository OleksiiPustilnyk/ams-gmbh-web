import { Product } from '@/interfaces/product.interface'

interface FilterOptions {
    priceRange: [number, number]
    sortBy: string
    roofTypes: string[]
}

export function filterProducts(
    products: Product[],
    filters: FilterOptions,
    categorySlug?: string,
): Product[] {
    return products
        .filter((product) => {
            const matchesCategory =
                !categorySlug || product.category === categorySlug

            const productPrice = Number(product.price.replace('€', '').trim())
            const matchesPrice =
                productPrice >= filters.priceRange[0] &&
                productPrice <= filters.priceRange[1]

            const matchesRoofType =
                filters.roofTypes.length === 0 ||
                filters.roofTypes.includes(product.roofType?.trim() || '')

            return matchesCategory && matchesPrice && matchesRoofType
        })
        .sort((a, b) => {
            if (filters.sortBy === 'low_to_high') {
                return (
                    Number(a.price.replace('€', '').trim()) -
                    Number(b.price.replace('€', '').trim())
                )
            }
            if (filters.sortBy === 'high_to_low') {
                return (
                    Number(b.price.replace('€', '').trim()) -
                    Number(a.price.replace('€', '').trim())
                )
            }
            return 0
        })
}
