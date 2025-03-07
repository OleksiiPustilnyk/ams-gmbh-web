'use client'

import { useState } from 'react'
import CustomButton from '../ui/buttons/custom-button'
import Image from 'next/image'

interface Category {
    name: string
    imageUrl?: string
    subcategories?: string[]
}

const categories: Category[] = [
    {
        name: 'All Categories',
        imageUrl: '/images/product-section/img-dropdown-alum-profile.png',
    },
    {
        name: 'Aluminium Profile',
        imageUrl: '/images/product-section/img-dropdown-alum-profile.png',
    },
    {
        name: 'Alu Carport',
        imageUrl: '/images/product-section/img-dropdown-alum-profile.png',
    },
    {
        name: 'Alu Zaun',
        imageUrl: '/images/product-section/img-dropdown-alum-profile.png',
    },
    {
        name: 'Dichtungen',
        imageUrl: '/images/product-section/img-dropdown-alum-profile.png',
    },
    {
        name: 'Überdachungen',
        imageUrl: '/images/product-section/img-dropdown-alum-profile.png',
        subcategories: ['Laminated glass', 'Polycarbonat'],
    },
    {
        name: 'Zubehör',
        imageUrl: '/images/product-section/img-dropdown-alum-profile.png',
    },
    {
        name: 'Zaunprofile',
        imageUrl: '/images/product-section/img-dropdown-alum-profile.png',
    },
    {
        name: 'Assemble the terrace',
        imageUrl: '/images/product-section/img-dropdown-alum-profile.png',
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
        <div className='relative w-full border-t border-b border-[#E4E7EC] py-6 mb-6 lg:py-0 lg:mb-0 lg:border-none'>
            <CustomButton
                onClick={toggleDropdown}
                leftIcon={
                    <Image
                        src='/images/icons/icon-category.svg'
                        alt='Category'
                        width={15}
                        height={15}
                    />
                }
                rightIcon={
                    <Image
                        src='/images/icons/icon-chevron.svg'
                        alt='Arrow'
                        width={10}
                        height={5}
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
                                        <button
                                            onClick={() =>
                                                handleCategoryClick(category)
                                            }
                                            className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-[4px] hover:bg-lightGray ${
                                                openCategory === category.name
                                                    ? 'bg-lightGray'
                                                    : ''
                                            }`}
                                        >
                                            <span className='flex items-center gap-2'>
                                                <Image
                                                    src='/images/icons/icon-right-arrow.svg'
                                                    alt='Arrow'
                                                    width={12}
                                                    height={12}
                                                />
                                                {category.name}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='w-1/2 p-4 flex flex-col items-center bg-secondaryWhite'>
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
                                                <li
                                                    key={sub}
                                                    className='flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer'
                                                >
                                                    <Image
                                                        src='/images/icons/icon-right-arrow.svg'
                                                        alt='Arrow'
                                                        width={12}
                                                        height={12}
                                                    />
                                                    {sub}
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
                                    <button
                                        onClick={() =>
                                            handleCategoryClick(category)
                                        }
                                        className={`w-full flex items-center justify-between py-3 text-left rounded-[4px] hover:bg-lightGray ${
                                            openCategory === category.name
                                                ? 'bg-lightGray'
                                                : ''
                                        }`}
                                    >
                                        <span className='flex items-center gap-2'>
                                            <Image
                                                src='/images/icons/icon-right-arrow.svg'
                                                alt='Arrow'
                                                width={12}
                                                height={12}
                                            />
                                            {category.name}
                                        </span>
                                    </button>
                                    {openCategory === category.name &&
                                        category.subcategories && (
                                            <ul className='ml-6 mt-2 text-gray-700 text-left border-l border-gray-300 pl-4'>
                                                {category.subcategories.map(
                                                    (sub) => (
                                                        <li
                                                            key={sub}
                                                            className='py-2 flex items-center gap-2 hover:bg-gray-100 rounded-lg cursor-pointer'
                                                        >
                                                            <Image
                                                                src='/images/icons/icon-right-arrow.svg'
                                                                alt='Arrow'
                                                                width={12}
                                                                height={12}
                                                            />
                                                            {sub}
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
