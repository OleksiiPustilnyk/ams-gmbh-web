'use client'
import ProductTable from '@/components/admin-panel/sections/product-table/product-table'
import SubHeader from '@/components/admin-panel/sections/sub-header/sub-header'
import { useState } from 'react'
import { AdminBlogsViewProps } from './blogs.types'
import BlogTable from '@/components/admin-panel/sections/blog-table/blog-table'

export default function AdminBlogsView({ blogs }: AdminBlogsViewProps) {
    //BlogCategory is debounced value from ItemSearch
    const [blogCategory, setBlogCategory] = useState<string | null>(null)

    const handleInputSearch = (value: string) => {
        setBlogCategory(value)
    }

    const handleDeleteBlog = (blogId: string) => {
        // to do delete on server
        console.log('Deleting BLOG with ID:', blogId)
    }

    console.log('blogCategory debaunded::::::', blogCategory)

    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <h1 className='text-2xl font-bold mb-6'>Blogs</h1>
            <SubHeader
                onSearch={handleInputSearch}
                placeholder={'Search by blog category'}
                createLinkHref='/admin/blogs/create'
                createLinkText='Add new blog'
            />
            <BlogTable
                blogs={blogs}
                updateLinkHref={'/admin/blogs/update'}
                onDeleteBlog={handleDeleteBlog}
            />
        </div>
    )
}
