'use client'

import { products } from '@/constants/products'
import { ProductContentBlock } from '@/interfaces/product.interface'
import ProductView from '@/view/categories/category/product'
import { notFound } from 'next/navigation'
import { useParams } from 'next/navigation'

export default function ProductPage() {
    const params = useParams()

    if (!params?.productSlug) return notFound()

    const productSlug = Array.isArray(params.productSlug)
        ? params.productSlug[0]
        : params.productSlug

    const product = products.find((cat) => cat.slug === productSlug)

    if (!product) return notFound()

    return (
        <div>
            <ProductView
                product={{
                    ...product,
                    descriptionTabs:
                        product.descriptionTabs as ProductContentBlock[],
                }}
            />
        </div>
    )
}
