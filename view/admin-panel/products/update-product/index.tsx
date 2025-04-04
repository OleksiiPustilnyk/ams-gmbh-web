'use client'

import UpdateProductForm from '@/components/admin-panel/forms/update-product-form'
import { Product } from '../products.types'

interface UpdateProductViewProps {
    product: Product
    // to do
}

export default function UpdateProductView({ product }: UpdateProductViewProps) {
    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <h1 className='text-2xl font-bold mb-6'>Update product</h1>
            <UpdateProductForm product={product} />
        </div>
    )
}
