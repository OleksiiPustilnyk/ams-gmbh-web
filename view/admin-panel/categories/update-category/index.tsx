'use client'

import { Category } from '../categories.types'
import UpdateCategoryForm from '@/components/admin-panel/forms/update-category-form'

interface UpdateCategoryViewProps {
    category: Category
    // to do
}

export default function UpdateCategoryView({
    category,
}: UpdateCategoryViewProps) {
    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <h1 className='text-2xl font-bold mb-6'>Update category</h1>
            <UpdateCategoryForm category={category} />
        </div>
    )
}
