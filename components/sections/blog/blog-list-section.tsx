'use client'

import { useState } from 'react'
import BlogCard from '@/components/blog-card/blog-card'
import { articles } from '@/constants/blog-articles'
import Sidebar from '@/components/sidebar/sidebar'
import Pagination from '@/components/ui/pagination/pagination'
import { validateContent } from '@/utils/validate-content'
import { formatDateToArchive } from '@/helpers/format-date-to-archive'

const POSTS_PER_PAGE = 6

export default function BlogList() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null,
    )
    const [selectedDate, setSelectedDate] = useState<string | null>(null)
    const [currentPage, setCurrentPage] = useState(1)

    const filteredArticles = articles.filter((article) => {
        const matchesCategory = selectedCategory
            ? article.category === selectedCategory
            : true

        const matchesDate = selectedDate
            ? formatDateToArchive(article.date) === selectedDate
            : true

        return matchesCategory && matchesDate
    })

    const totalPages = Math.ceil(filteredArticles.length / POSTS_PER_PAGE)

    const paginatedArticles = filteredArticles.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE,
    )

    return (
        <div className='grid grid-cols-1 md:grid-cols-9 gap-6'>
            <div className='md:col-span-5 lg:col-span-6 flex flex-col gap-6'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    {paginatedArticles.length > 0 ? (
                        paginatedArticles.map((article) => (
                            <BlogCard
                                key={article.id}
                                article={{
                                    ...article,
                                    content: validateContent(article.content),
                                }}
                            />
                        ))
                    ) : (
                        <p className='text-gray-500 text-sm'>
                            Keine Beiträge gefunden.
                        </p>
                    )}
                </div>
                {totalPages > 1 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                )}
            </div>
            <div className='lg:col-span-3 md:col-span-4'>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    articles={articles}
                />
            </div>
        </div>
    )
}
