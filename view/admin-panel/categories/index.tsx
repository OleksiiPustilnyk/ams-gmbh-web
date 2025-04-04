'use client'

import SubHeader from '@/components/admin-panel/sections/sub-header/sub-header'
import { AdminCategoryViewProps } from './categories.types'
import CategoryTable from '@/components/admin-panel/sections/category-table.tsx/category-table'

export default function AdminCategoriesView({
    categories,
}: AdminCategoryViewProps) {
    const handleDeleteCategory = (id: string) => {
        // to do delete on server
        console.log('Deleting Category with ID:', id)
    }

    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <h1 className='text-2xl font-bold mb-6'>Categories</h1>
            <SubHeader
                createLinkHref='/admin/categories/create'
                createLinkText='Add new category'
            />
            <CategoryTable
                categories={categories}
                updateLinkHref={'/admin/categories/update'}
                onDeleteCategory={handleDeleteCategory}
            />
        </div>
    )
}
