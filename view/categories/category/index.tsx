'use client'

import { useState, useMemo } from 'react'
import Breadcrumbs from '@/components/ui/bread-crumbs/bread-crumbs'
import { CategoryArticle } from '@/interfaces/category.interface'
import { products } from '@/constants/products'
import ProductGrid from '@/components/product-card/product-grid'
import ProductSidebar from '@/components/sidebar/product-sidebar'
import { filterProducts } from '@/utils/filter-products'

interface CategoryViewProps {
    category: CategoryArticle
}

interface FilterOptions {
    priceRange: [number, number]
    sortBy: string
    roofTypes: string[]
}

export default function CategoryView({ category }: CategoryViewProps) {
    const [filters, setFilters] = useState<FilterOptions>({
        priceRange: [0, 450],
        sortBy: '',
        roofTypes: [],
    })

    const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
        setFilters((prev) => ({ ...prev, ...newFilters }))
    }

    const filteredProducts = useMemo(
        () => filterProducts(products, filters, category.slug),
        [filters, category.slug],
    )

    return (
        <div className='w-full mx-auto pt-6 pb-10'>
            <div className='container mx-auto px-4 md:px-6 lg:px-0'>
                <Breadcrumbs categoryTitle={category.title} />

                <div className='container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 mt-8'>
                    <div className='lg:col-span-1'>
                        <ProductSidebar
                            filters={filters}
                            totalResults={filteredProducts.length}
                            onFilterChange={handleFilterChange}
                        />
                    </div>

                    <div className='lg:col-span-4'>
                        {filteredProducts.length > 0 ? (
                            <ProductGrid
                                products={filteredProducts}
                                columns={3}
                            />
                        ) : (
                            <p className='text-customGray-500 mt-4'>
                                Keine verfügbaren Produkte
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
