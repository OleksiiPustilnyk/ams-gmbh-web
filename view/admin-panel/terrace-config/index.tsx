'use client'
import ProductTable from '@/components/admin-panel/sections/product-table/product-table'
import SubHeader from '@/components/admin-panel/sections/sub-header/sub-header'
import { useState } from 'react'
import { AdminTerraceConfigViewProps } from './terrace-config.types'

export default function AdminTerraceConfigView({
    terraceConfig,
}: AdminTerraceConfigViewProps) {
    // to do

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

    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <h1 className='text-2xl font-bold mb-6'>
                Terrace roof materials pricing
            </h1>
            <SubHeader
                onSearch={handleInputSearch}
                placeholder={'Search by article number'}
                createLinkHref='/admin/terrace-configurator/create'
                createLinkText='Add new item'
            />
            <ProductTable
                products={terraceConfig}
                updateLinkHref={'/admin/terrace-configurator/update'}
                onDeleteProduct={handleDeleteProduct}
            />
        </div>
    )
}
