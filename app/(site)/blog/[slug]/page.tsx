'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import { articles } from '@/constants/blog-articles'
import BlogPostView from '@/view/blog/post-view'
import { validateContent } from '@/utils/validate-content'

export default function BlogPostPage() {
    const params = useParams()

    if (!params?.slug) return notFound()

    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug

    const post = articles.find((article) => article.slug === slug)

    if (!post) return notFound()

    return (
        <BlogPostView
            post={{ ...post, content: validateContent(post.content) }}
        />
    )
}
