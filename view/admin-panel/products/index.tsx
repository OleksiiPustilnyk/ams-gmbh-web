'use client'
import ProductTable from '@/components/admin-panel/sections/product-table/product-table'
import SubHeader from '@/components/admin-panel/sections/sub-header/sub-header'
import { useState } from 'react'
import { AdminProductsViewProps } from './products.types'

export default function AdminProductsView({
    products,
}: AdminProductsViewProps) {
    // to do
    // const [productsList, setProductsList] = useState(products)

    //ArticleNumber is debounced value from ItemSearch
    const [articleNumber, setArticleNumber] = useState<string | null>(null)

    const handleInputSearch = (value: string) => {
        setArticleNumber(value)
    }

    const handleDeleteProduct = (productId: string) => {
        // to do delete on server
        console.log('Deleting product with ID:', productId)

        //    setProductsList((prevProducts) =>
        //        prevProducts.filter((product) => product.id !== productId),
        //    )
    }

    console.log('articleNumber debaunded::::::', articleNumber)

    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <h1 className='text-2xl font-bold mb-6'>Products</h1>
            <SubHeader
                onSearch={handleInputSearch}
                placeholder={'Search by article number'}
                createLinkHref='/admin/products/create'
                createLinkText='Add new product'
            />
            <ProductTable
                products={products}
                updateLinkHref={'/admin/products/update'}
                onDeleteProduct={handleDeleteProduct}
            />
        </div>
    )
}
