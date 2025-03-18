'use client'

import ProductPageSection from '@/components/sections/categories/product/product-page-section'
import Breadcrumbs from '@/components/ui/bread-crumbs/bread-crumbs'

import { Product } from '@/interfaces/product.interface'
import { pageCategories } from '@/constants/categories-data'

interface ProductViewProps {
    product: Product
}

export default function ProductView({ product }: ProductViewProps) {
    const category = pageCategories.find((cat) => cat.slug === product.category)

    return (
        <div className='w-full mx-auto pt-6 pb-10'>
            <div className='container mx-auto px-4 md:px-6 lg:px-0'>
                <Breadcrumbs
                    categoryTitle={category?.title || 'Kategorie'}
                    categorySlug={product.category}
                    productTitle={product.title}
                />
            </div>
            <ProductPageSection product={product} />
        </div>
    )
}
