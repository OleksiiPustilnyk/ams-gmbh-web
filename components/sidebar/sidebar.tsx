'use client'

import Link from 'next/link'
import Image from 'next/image'
import CustomSecondaryButton from '../ui/buttons/custom-secondary-button'
import { MarkerIcon } from '../ui/icons/icon-marker'
import { CloseIcon } from '../ui/icons/icon-close'

interface SidebarProps {
    selectedTag?: string | null
    setSelectedTag?: (tag: string | null) => void
    showTags?: boolean
    showArchive?: boolean
}

const tags = ['Carports', 'Aluminiumprofile kaufen']
const archive = ['Juni 2022', 'März 2022']
const popularPosts = [
    {
        title: 'Alu Carport',
        image: '/images/img-blog-worker.png',
        category: 'Carports',
    },
    {
        title: 'Alu Carport',
        image: '/images/img-blog-worker.png',
        category: 'Carports',
    },
    {
        title: 'Alu Carport',
        image: '/images/img-blog-worker.png',
        category: 'Aluminiumprofile kaufen',
    },
]

export default function Sidebar({
    selectedTag,
    setSelectedTag,
    showTags = true,
    showArchive = true,
}: SidebarProps) {
    return (
        <aside className='p-5'>
            {showTags && (
                <>
                    <h3 className='text-base font-semibold text-customGray-700 mb-6'>
                        Schlagwörter
                    </h3>

                    {selectedTag && setSelectedTag && (
                        <div className='mb-3'>
                            <CustomSecondaryButton
                                text={selectedTag}
                                icon={<CloseIcon />}
                                iconPosition='right'
                                onClick={() => setSelectedTag(null)}
                                borderColor='border-customYellow-500 bg-[#FFF8E1]'
                                textSize='text-sm'
                            />
                        </div>
                    )}

                    {setSelectedTag && (
                        <div className='flex flex-col gap-2 mb-5'>
                            {tags.map((tag) => (
                                <CustomSecondaryButton
                                    key={tag}
                                    text={tag}
                                    onClick={() =>
                                        setSelectedTag(
                                            tag === selectedTag ? null : tag,
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

            {showArchive && (
                <>
                    <h3 className='text-lg font-semibold text-customGray-700 mb-3'>
                        Archiv
                    </h3>
                    <ul className='space-y-2 mb-5'>
                        {archive.map((item) => (
                            <li key={item}>
                                <Link
                                    href='#'
                                    className='text-gray-700 hover:text-customGray-700 transition'
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>

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
