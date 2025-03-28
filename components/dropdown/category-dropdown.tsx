'use client'

import { useState } from 'react'
import CustomButton from '../ui/buttons/custom-button'
import Image from 'next/image'
import { CategoryIcon } from '../ui/icons/icon-category'
import { ChevronIcon } from '../ui/icons/icon-chevron'
import { ArrowIcon } from '../ui/icons/icon-arrow'
import Link from 'next/link'

interface Category {
    name: string
    imageUrl?: string
    subcategories?: { name: string; link: string }[]
    link?: string
}

const categories: Category[] = [
    {
        name: 'All Categories',
        imageUrl: '/images/product-section/img-dropdown-alum-profile.png',
        link: '/categories',
    },
    {
        name: 'Aluminium Profile',
        imageUrl: '/images/product-section/img-dropdown-alum-profile.png',
        link: '/categories/aluminium-profile',
    },
    {
        name: 'Alu Carport',
        imageUrl: '/images/product-section/img-dropdown-alum-profile.png',
        link: '/categories/alu-carport',
    },
    {
        name: 'Alu Zaun',
        imageUrl: '/images/product-section/img-dropdown-alum-profile.png',
        link: '/categories/alu-zaun',
    },
    {
        name: 'Dichtungen',
        imageUrl: '/images/product-section/img-dropdown-alum-profile.png',
        link: '/categories/dichtungen',
    },
    {
        name: 'Überdachungen',
        imageUrl: '/images/product-section/img-dropdown-alum-profile.png',
        subcategories: [
            {
                name: 'Laminated glass',
                link: '/categories/uberdachungen/laminated-glass',
            },
            {
                name: 'Polycarbonat',
                link: '/categories/uberdachungen/polycarbonat',
            },
        ],
    },
    {
        name: 'Zubehör',
        imageUrl: '/images/product-section/img-dropdown-alum-profile.png',
        link: '/categories/zubehor',
    },
    {
        name: 'Zaunprofile',
        imageUrl: '/images/product-section/img-dropdown-alum-profile.png',
        link: '/categories/zaunprofile',
    },
    {
        name: 'Assemble the terrace',
        imageUrl: '/images/product-section/img-dropdown-alum-profile.png',
        link: '/categories/assemble-the-terrace',
    },
]

export default function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const [openCategory, setOpenCategory] = useState<string | null>(null)
    const [hoveredCategory, setHoveredCategory] = useState(categories[0])

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
        setOpenCategory(null)
    }

    const handleCategoryClick = (category: Category) => {
        setHoveredCategory(category)
        setOpenCategory(openCategory === category.name ? null : category.name)
    }

    return (
        <div className='relative w-full border-t border-b border-customGray-200 py-6 mb-6 lg:py-0 lg:mb-0 lg:border-none'>
            <CustomButton
                onClick={toggleDropdown}
                leftIcon={<CategoryIcon />}
                rightIcon={
                    <ChevronIcon
                        className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                }
                className='w-full lg:w-[200px]'
            >
                Kategorien
            </CustomButton>
            {isOpen && (
                <>
                    <div className='absolute left-0 mt-2 w-[640px] h-[470px] bg-white border rounded-lg shadow-md z-50 hidden lg:flex overflow-y-auto'>
                        <div className='w-1/2 p-4'>
                            <ul>
                                {categories.map((category) => (
                                    <li key={category.name}>
                                        {category.subcategories ? (
                                            <button
                                                onClick={() =>
                                                    handleCategoryClick(
                                                        category,
                                                    )
                                                }
                                                className='w-full flex items-center justify-between px-4 py-3 text-left rounded-[4px] hover:bg-customGray-100'
                                            >
                                                <span className='flex items-center gap-2'>
                                                    <ArrowIcon className='w-3 h-3' />
                                                    {category.name}
                                                </span>
                                            </button>
                                        ) : (
                                            <Link
                                                href={category.link!}
                                                className='w-full flex items-center justify-between px-4 py-3 text-left rounded-[4px] hover:bg-customGray-100'
                                            >
                                                <span className='flex items-center gap-2'>
                                                    <ArrowIcon className='w-3 h-3' />
                                                    {category.name}
                                                </span>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='w-1/2 p-4 flex flex-col items-center bg-customGray-50'>
                            {hoveredCategory.imageUrl && (
                                <div
                                    className={`relative w-full flex justify-center transition-all duration-300 ${
                                        openCategory &&
                                        categories.find(
                                            (cat) => cat.name === openCategory,
                                        )?.subcategories
                                            ? 'h-[320px]'
                                            : 'h-[400px]'
                                    }`}
                                >
                                    <Image
                                        src={hoveredCategory.imageUrl}
                                        alt={hoveredCategory.name}
                                        width={240}
                                        height={400}
                                        className='object-contain'
                                    />
                                </div>
                            )}
                            {openCategory &&
                                categories.find(
                                    (cat) => cat.name === openCategory,
                                )?.subcategories && (
                                    <ul
                                        className={`w-full mt-4 text-gray-700 text-left transition-opacity duration-500 max-h-40 overflow-y-auto ${
                                            openCategory
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                        }`}
                                    >
                                        {categories
                                            .find(
                                                (cat) =>
                                                    cat.name === openCategory,
                                            )
                                            ?.subcategories?.map((sub) => (
                                                <li key={sub.name}>
                                                    <Link
                                                        href={sub.link}
                                                        className='flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer'
                                                    >
                                                        <ArrowIcon className='w-3 h-3' />
                                                        {sub.name}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                )}
                        </div>
                    </div>
                    <div className='mt-2 w-full bg-white flex flex-col gap-2 lg:hidden max-h-[60vh] overflow-y-auto'>
                        <ul>
                            {categories.map((category) => (
                                <li key={category.name}>
                                    {category.subcategories ? (
                                        <button
                                            onClick={() =>
                                                handleCategoryClick(category)
                                            }
                                            className={`w-full flex items-center justify-between py-3 text-left rounded-[4px] hover:bg-customGray-100 ${
                                                openCategory === category.name
                                                    ? 'bg-customGray-100'
                                                    : ''
                                            }`}
                                        >
                                            <span className='flex items-center gap-2'>
                                                <ArrowIcon className='w-3 h-3' />
                                                {category.name}
                                            </span>
                                        </button>
                                    ) : (
                                        <Link
                                            href={category.link!}
                                            className='w-full flex items-center justify-between py-3 text-left rounded-[4px] hover:bg-customGray-100'
                                        >
                                            <span className='flex items-center gap-2'>
                                                <ArrowIcon className='w-3 h-3' />
                                                {category.name}
                                            </span>
                                        </Link>
                                    )}

                                    {openCategory === category.name &&
                                        category.subcategories && (
                                            <ul className='ml-6 mt-2 text-gray-700 text-left border-l border-gray-300 pl-4'>
                                                {category.subcategories.map(
                                                    (sub) => (
                                                        <li key={sub.name}>
                                                            <Link
                                                                href={sub.link}
                                                                className='py-2 flex items-center gap-2 hover:bg-gray-100 rounded-lg cursor-pointer'
                                                            >
                                                                <ArrowIcon className='w-3 h-3' />
                                                                {sub.name}
                                                            </Link>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    )
}
