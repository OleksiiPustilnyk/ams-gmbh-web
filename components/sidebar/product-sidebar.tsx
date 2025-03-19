'use client'

import { useState, useEffect } from 'react'
import CustomRangeSlider from '../ui/custom-rage-slider/custom-rage-slider'
import CustomCheckbox from '../ui/custom-checkbox/custom-checkbox'
import CustomSecondaryButton from '../ui/buttons/custom-secondary-button'
import { CloseIcon } from '../ui/icons/icon-close'
import { ChevronIcon } from '../ui/icons/icon-chevron'
import CustomRadioGroup from '../ui/custom-radio/custom-radio'

interface SidebarProps {
    filters: Filters
    totalResults: number
    onFilterChange: (filters: Partial<Filters>) => void
}

interface Filters {
    sortBy: string
    priceRange: [number, number]
    roofTypes: string[]
}

const sortOptions = [
    { label: 'Popularity', value: 'popularity' },
    { label: 'Latest', value: 'latest' },
    { label: 'Low to high', value: 'low_to_high' },
    { label: 'High to low', value: 'high_to_low' },
]

const roofOptions = [
    { label: 'mit Polycarbonat', value: 'polycarbonat' },
    { label: 'mit VSG', value: 'vsg' },
]

type SidebarSections = 'sort' | 'price' | 'roof'

export default function ProductSidebar({
    filters,
    totalResults,
    onFilterChange,
}: SidebarProps) {
    const [isOpenSections, setIsOpenSections] = useState<
        Record<SidebarSections, boolean>
    >({
        sort: true,
        price: true,
        roof: true,
    })

    const [isMobileOpen, setIsMobileOpen] = useState(false)

    // 🔥 Отключаем скролл при открытом фильтре
    useEffect(() => {
        if (isMobileOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }

        return () => document.body.classList.remove('overflow-hidden')
    }, [isMobileOpen])

    const toggleSection = (section: SidebarSections) => {
        setIsOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
    }

    return (
        <>
            <button
                className='lg:hidden px-4 py-2 border rounded-md text-customGray-700 font-medium'
                onClick={() => setIsMobileOpen(true)}
            >
                Filter
            </button>

            <aside className='hidden lg:block'>
                <SidebarContent
                    filters={filters}
                    totalResults={totalResults}
                    onFilterChange={onFilterChange}
                    isOpenSections={isOpenSections}
                    toggleSection={toggleSection}
                />
            </aside>

            {isMobileOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-start'>
                    <div className='w-4/5 bg-white h-full overflow-y-auto relative top-16'>
                        <div className='sticky top-0 left-0 right-0 p-6 bg-white z-10'>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-customGray-700 font-semibold text-lg'>
                                    Filter
                                </h3>
                                <button onClick={() => setIsMobileOpen(false)}>
                                    <CloseIcon className='w-3 h-3 text-customGray-700' />
                                </button>
                            </div>
                        </div>

                        <div className='p-6'>
                            <SidebarContent
                                filters={filters}
                                totalResults={totalResults}
                                onFilterChange={onFilterChange}
                                isOpenSections={isOpenSections}
                                toggleSection={toggleSection}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

interface SidebarContentProps extends SidebarProps {
    isOpenSections: Record<SidebarSections, boolean>
    toggleSection: (section: SidebarSections) => void
}

function SidebarContent({
    filters,
    totalResults,
    onFilterChange,
    isOpenSections,
    toggleSection,
}: SidebarContentProps) {
    return (
        <div className=''>
            <div className='flex justify-between items-center mb-4 pb-3 border-b border-b-customGray-200'>
                <span className='text-customGray-700 font-medium'>
                    Showing all {totalResults} results
                </span>

                <CustomSecondaryButton
                    text='Clean'
                    icon={<CloseIcon className='w-2 h-2' />}
                    iconPosition='right'
                    onClick={() =>
                        onFilterChange({
                            sortBy: '',
                            priceRange: [0, 450],
                            roofTypes: [],
                        })
                    }
                />
            </div>

            <div className='mb-6 pb-3 border-b border-b-customGray-200'>
                <div
                    className='flex justify-between items-center cursor-pointer mb-4'
                    onClick={() => toggleSection('sort')}
                >
                    <h3 className='text-customGray-700 text-font-semibold'>
                        Sort by
                    </h3>
                    <ChevronIcon
                        className={`transition-transform ${isOpenSections.sort ? 'rotate-180' : ''}`}
                    />
                </div>
                {isOpenSections.sort && (
                    <CustomRadioGroup
                        options={sortOptions}
                        value={filters.sortBy}
                        onChange={(value) => onFilterChange({ sortBy: value })}
                    />
                )}
            </div>

            <div className='mb-6 pb-3 border-b border-b-customGray-200'>
                <div
                    className='flex justify-between items-center cursor-pointer mb-4'
                    onClick={() => toggleSection('price')}
                >
                    <h3 className='text-customGray-700 font-semibold'>Price</h3>
                    <ChevronIcon
                        className={`transition-transform ${isOpenSections.price ? 'rotate-180' : ''}`}
                    />
                </div>
                {isOpenSections.price && (
                    <CustomRangeSlider
                        min={0}
                        max={450}
                        value={filters.priceRange}
                        onChange={(value) =>
                            onFilterChange({ priceRange: value })
                        }
                    />
                )}
            </div>

            <div className='pb-3 border-b border-b-customGray-200'>
                <div
                    className='flex justify-between items-center cursor-pointer mb-4'
                    onClick={() => toggleSection('roof')}
                >
                    <h3 className='text-customGray-700 font-semibold'>
                        Dacheindeckung
                    </h3>
                    <ChevronIcon
                        className={`transition-transform ${isOpenSections.roof ? 'rotate-180' : ''}`}
                    />
                </div>
                {isOpenSections.roof && (
                    <div className='space-y-2'>
                        {roofOptions.map((option) => (
                            <CustomCheckbox
                                key={option.value}
                                label={option.label}
                                checked={filters.roofTypes.includes(
                                    option.value,
                                )}
                                onChange={() =>
                                    onFilterChange({
                                        roofTypes: filters.roofTypes.includes(
                                            option.value,
                                        )
                                            ? filters.roofTypes.filter(
                                                  (type) =>
                                                      type !== option.value,
                                              )
                                            : [
                                                  ...filters.roofTypes,
                                                  option.value,
                                              ],
                                    })
                                }
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
