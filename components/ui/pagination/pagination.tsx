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
            return [1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages]
        }

        if (currentPage >= totalPages - 2) {
            return [1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages]
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
        <div className='flex justify-between items-center mt-6'>
            <CustomSecondaryButton
                text='Previous'
                icon={<ArrowIcon className='w-3 h-3 rotate-180' />}
                iconPosition='left'
                borderColor=''
                textSize='text-sm'
                className={`text-gray-500 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            />

            <div className='flex space-x-2'>
                {paginationRange.map((page, index) =>
                    page === '...' ? (
                        <span key={index} className='px-3 py-1 text-gray-500'>
                            ...
                        </span>
                    ) : (
                        <CustomSecondaryButton
                            key={index}
                            text={String(page)}
                            onClick={() => onPageChange(Number(page))}
                            borderColor={
                                currentPage === page
                                    ? 'border-defaultYellow'
                                    : ''
                            }
                            textSize='text-sm'
                            className={`${
                                currentPage === page
                                    ? 'bg-defaultYellow text-primary'
                                    : 'hover:bg-[#FFF3D3]'
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
                className={`text-gray-500 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            />
        </div>
    )
}
