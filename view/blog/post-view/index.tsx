'use client'

import { BlogArticle } from '@/interfaces/blog-article.interface'
import Breadcrumbs from '@/components/ui/bread-crumbs/bread-crumbs'
import Sidebar from '@/components/sidebar/sidebar'
import { useState } from 'react'
import PostSection from '@/components/sections/blog/blog-post/post-section'

interface BlogPostViewProps {
    post: BlogArticle
}

export default function BlogPostView({ post }: BlogPostViewProps) {
    const [selectedTag, setSelectedTag] = useState<string | null>(null)

    return (
        <div className='w-full mx-auto pt-6 pb-10'>
            <div className='container mx-auto px-4 md:px-6 lg:px-0'>
                <Breadcrumbs blogTitle={post.title} />
            </div>

            <div className='container mx-auto py-10 px-4 lg:px-0 grid grid-cols-1 md:grid-cols-10 gap-6'>
                <div className='lg:col-span-7 md:col-span-6'>
                    <PostSection post={post} />
                </div>

                <div className='lg:col-span-3 md:col-span-4'>
                    <Sidebar
                        selectedTag={selectedTag}
                        setSelectedTag={setSelectedTag}
                    />
                </div>
            </div>
        </div>
    )
}
