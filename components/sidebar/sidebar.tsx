'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomSecondaryButton from '../ui/buttons/custom-secondary-button'
import { MarkerIcon } from '../ui/icons/icon-marker'
import { CloseIcon } from '../ui/icons/icon-close'
import {
    extractArchiveDates,
    extractCategories,
} from '@/helpers/sidebar-helpers'

interface SidebarProps {
    selectedCategory?: string | null
    setSelectedCategory?: (category: string | null) => void
    selectedDate?: string | null
    setSelectedDate?: (date: string | null) => void
    showCategories?: boolean
    showArchive?: boolean
    articles?: { date: string; category: string }[]
}

export default function Sidebar({
    selectedCategory,
    setSelectedCategory,
    selectedDate,
    setSelectedDate,
    showCategories = true,
    showArchive = true,
    articles = [],
}: SidebarProps) {
    const categories = useMemo(() => extractCategories(articles), [articles])
    const archive = useMemo(() => extractArchiveDates(articles), [articles])

    const popularPosts = [
        {
            title: 'Alu Carport',
            image: '/images/img-blog-worker.png',
            category: 'Carports',
        },
        {
            title: 'Aluminium Profile',
            image: '/images/img-blog-worker.png',
            category: 'Aluminiumprofile kaufen',
        },
        {
            title: 'Dichtungen für Terrassenüberdachung',
            image: '/images/img-blog-worker.png',
            category: 'Carports',
        },
    ]

    return (
        <aside className='p-5'>
            {showCategories && categories.length > 0 && (
                <>
                    <h3 className='text-base font-semibold text-customGray-700 mb-6'>
                        Schlagwörter
                    </h3>

                    {selectedCategory && setSelectedCategory && (
                        <div className='mb-3'>
                            <CustomSecondaryButton
                                text={selectedCategory}
                                icon={<CloseIcon />}
                                iconPosition='right'
                                onClick={() => setSelectedCategory(null)}
                                borderColor='border-customYellow-500 bg-[#FFF8E1]'
                                textSize='text-sm'
                            />
                        </div>
                    )}

                    {setSelectedCategory && (
                        <div className='flex flex-col gap-2 mb-5'>
                            {categories.map((category) => (
                                <CustomSecondaryButton
                                    key={category}
                                    text={category}
                                    onClick={() =>
                                        setSelectedCategory(
                                            category === selectedCategory
                                                ? null
                                                : category,
                                        )
                                    }
                                    className='w-fit'
                                    borderColor=''
                                    textSize='text-sm'
                                />
                            ))}
                        </div>
                    )}

                    <hr className='border-customGray-300 my-4' />
                </>
            )}

            {showArchive && archive.length > 0 && (
                <>
                    <h3 className='text-lg font-semibold text-customGray-700 mb-3'>
                        Archiv
                    </h3>

                    {selectedDate && setSelectedDate && (
                        <div className='mb-3'>
                            <CustomSecondaryButton
                                text={selectedDate}
                                icon={<CloseIcon />}
                                iconPosition='right'
                                onClick={() => setSelectedDate(null)}
                                borderColor='border-customYellow-500 bg-[#FFF8E1]'
                                textSize='text-sm'
                            />
                        </div>
                    )}

                    {setSelectedDate && (
                        <ul className='space-y-2 mb-5'>
                            {archive.map((date) => (
                                <li key={date}>
                                    <CustomSecondaryButton
                                        text={date}
                                        onClick={() =>
                                            setSelectedDate(
                                                date === selectedDate
                                                    ? null
                                                    : date,
                                            )
                                        }
                                        className='w-fit'
                                        borderColor=''
                                        textSize='text-sm'
                                    />
                                </li>
                            ))}
                        </ul>
                    )}

                    <hr className='border-customGray-300 my-4' />
                </>
            )}

            <h3 className='text-lg font-semibold text-customGray-700 mb-3'>
                Beliebte Beiträge
            </h3>
            <ul className='space-y-4'>
                {popularPosts.map((post, index) => (
                    <li key={index} className='flex items-center gap-3'>
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={100}
                            height={100}
                            className='object-cover'
                        />
                        <div>
                            <Link
                                href='#'
                                className='text-customGray-700 hover:text-customYellow-500 transition font-medium'
                            >
                                {post.title}
                            </Link>
                            <CustomSecondaryButton
                                text={post.category}
                                icon={<MarkerIcon />}
                                iconPosition='left'
                                className='mt-3'
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
