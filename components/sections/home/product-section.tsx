'use client'

import ProductGrid from '@/components/product-card/product-grid'
import CustomLink from '@/components/ui/link/custom-link'
import { ProductSectionProps } from '@/interfaces/product.interface'

export default function ProductSection({
    title,
    products,
}: ProductSectionProps) {
    const linkPath = 'categories/aluminium-profile'

    return (
        <section className='container mx-auto py-12 px-4 md:px-4 lg:px-0'>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-3xl font-semibold leading-10 text-customGray-700'>
                    {title}
                </h2>

                <CustomLink href={`/${linkPath}`}>Alle ansehen</CustomLink>
            </div>

            <ProductGrid products={products} />
        </section>
    )
}
