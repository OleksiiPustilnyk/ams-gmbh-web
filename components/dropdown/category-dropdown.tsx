'use client'

import { useState } from 'react'
import CustomButton from '../ui/buttons/custom-button'
import Image from 'next/image'

interface Category {
    name: string
    imageUrl: string
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
        setOpenCategory(
            category.subcategories
                ? openCategory === category.name
                    ? null
                    : category.name
                : null,
        )
    }

    return (
        <div className='relative'>
            {/* Кнопка меню */}
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
                        className={`ml-7 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                }
            >
                Kategorien
            </CustomButton>

            {/* Выпадающее меню */}
            {isOpen && (
                <div className='absolute left-0 mt-2 w-[640px] flex bg-white border rounded-lg shadow-md z-50'>
                    {/* Колонка категорий */}
                    <div className='w-1/2 p-4'>
                        <ul className=''>
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

                    {/* Колонка изображения и подкатегорий */}
                    <div className='w-1/2 p-4 flex flex-col items-center bg-[#F9FAFB]'>
                        {/* Контейнер с фиксированной высотой */}
                        <div className='relative flex flex-col items-center w-full min-h-[400px]'>
                            {/* Картинка */}
                            <div
                                className={`relative w-full flex justify-center transition-all duration-300 ${
                                    openCategory ? 'h-[320px]' : 'h-[400px]'
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

                            {/* Подкатегории (с анимацией) */}
                            {openCategory &&
                                categories.find(
                                    (cat) => cat.name === openCategory,
                                )?.subcategories && (
                                    <ul
                                        className={`w-full mt-4 text-gray-700 text-left transition-all duration-500 transform ${
                                            openCategory
                                                ? 'opacity-100 translate-y-0'
                                                : 'opacity-0 -translate-y-2'
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
                </div>
            )}
        </div>
    )
}
