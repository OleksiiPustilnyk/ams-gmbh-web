'use client'

import AddBlogForm from '@/components/admin-panel/forms/add-blog-form'

export default function CreateBlogView() {
    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <h1 className='text-2xl font-bold mb-6'>Add new blog</h1>
            <AddBlogForm />
        </div>
    )
}
