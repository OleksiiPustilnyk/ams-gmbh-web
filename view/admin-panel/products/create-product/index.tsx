'use client'

import { productsMock } from '@/app/admin/products/page'
import AddProductForm from '@/components/admin-panel/forms/add-product-form'

const products = productsMock

export default function CreateProductView() {
    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <h1 className='text-2xl font-bold mb-6'>Add new product</h1>
            <AddProductForm products={products} />
            {/* <SubHeader
                onSearch={handleInputSearch}
                placeholder={'Search by article number'}
                createLinkHref='/admin/products/create'
                createLinkText='Add new product'
            />
            <ProductTable
                products={products}
                updateLinkHref={'/admin/products/update'}
                onDeleteProduct={handleDeleteProduct}
            /> */}
        </div>
    )
}
