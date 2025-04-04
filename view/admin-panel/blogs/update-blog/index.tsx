'use client'

import { Blog } from '../blogs.types'
import UpdateBlogForm from '@/components/admin-panel/forms/update-blog-form'

interface UpdateBlogViewProps {
    blog: Blog
    // to do
}

export default function UpdateBlogView({ blog }: UpdateBlogViewProps) {
    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <h1 className='text-2xl font-bold mb-6'>Update blog</h1>
            <UpdateBlogForm blog={blog} />
        </div>
    )
}
