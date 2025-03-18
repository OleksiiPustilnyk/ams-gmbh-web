'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'

import CategoryView from '@/view/categories/category'
import { pageCategories } from '@/constants/categories-data'

export default function CategoryPage() {
    const params = useParams()

    if (!params?.slug) return notFound()

    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug

    const category = pageCategories.find((cat) => cat.slug === slug)

    if (!category) return notFound()

    return <CategoryView category={category} />
}
