'use client'

import CategoriesSection from '@/components/sections/categories/categories-section'
import Breadcrumbs from '@/components/ui/bread-crumbs/bread-crumbs'

export default function CategoriesView() {
    return (
        <div className='w-full mx-auto pt-6 pb-10'>
            <div className='container mx-auto px-4 md:px-6 lg:px-0'>
                <Breadcrumbs />
            </div>
            <CategoriesSection />
        </div>
    )
}
