'use client'

import { useMemo } from 'react'
import CustomSecondaryButton from '../buttons/custom-secondary-button'
import { ArrowIcon } from '../icons/icon-arrow'

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    const paginationRange = useMemo(() => {
        if (totalPages <= 6) {
            return Array.from({ length: totalPages }, (_, i) => i + 1)
        }

        if (currentPage <= 3) {
            return [1, 2, 3, '...', totalPages]
        }

        if (currentPage >= totalPages - 2) {
            return [1, '...', totalPages - 2, totalPages - 1, totalPages]
        }

        return [
            1,
            '...',
            currentPage - 1,
            currentPage,
            currentPage + 1,
            '...',
            totalPages,
        ]
    }, [currentPage, totalPages])

    return (
        <>
            <div className='flex items-center justify-between mt-6 md:hidden'>
                <CustomSecondaryButton
                    text=''
                    icon={<ArrowIcon className='w-3 h-3 rotate-180' />}
                    iconPosition='right'
                    borderColor=''
                    textSize='text-sm'
                    className={`text-customGray-500 p-0 gap-0 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                />

                <span className='text-customGray-600 text-sm font-medium'>
                    Page {currentPage} of {totalPages}
                </span>

                <CustomSecondaryButton
                    text=''
                    icon={<ArrowIcon className='w-3 h-3' />}
                    iconPosition='right'
                    borderColor=''
                    textSize='text-sm'
                    className={`text-customGray-500 p-0 gap-0 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                />
            </div>

            <div className='hidden md:flex justify-between items-center mt-6'>
                <CustomSecondaryButton
                    text='Previous'
                    icon={<ArrowIcon className='w-3 h-3 rotate-180' />}
                    iconPosition='left'
                    borderColor=''
                    textSize='text-sm'
                    className={`text-customGray-500 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                />

                <div className='flex space-x-2'>
                    {paginationRange.map((page, index) =>
                        page === '...' ? (
                            <span
                                key={index}
                                className='px-3 py-1 text-customGray-500'
                            >
                                ...
                            </span>
                        ) : (
                            <CustomSecondaryButton
                                key={index}
                                text={String(page)}
                                onClick={() => onPageChange(Number(page))}
                                borderColor={
                                    currentPage === page
                                        ? 'border-customYellow-500'
                                        : ''
                                }
                                textSize='text-sm'
                                className={`${
                                    currentPage === page
                                        ? 'bg-customYellow-500 text-customGray-700'
                                        : 'hover:bg-customYellow-100'
                                }`}
                            />
                        ),
                    )}
                </div>

                <CustomSecondaryButton
                    text='Next'
                    icon={<ArrowIcon className='w-3 h-3' />}
                    iconPosition='right'
                    borderColor=''
                    textSize='text-sm'
                    className={`text-customGray-500 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                />
            </div>
        </>
    )
}
