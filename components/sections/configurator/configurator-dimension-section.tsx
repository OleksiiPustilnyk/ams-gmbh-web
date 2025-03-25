'use client'

import Image from 'next/image'
import { useState } from 'react'
import { UseFormRegister, FieldValues, Path } from 'react-hook-form'
import { ChevronIcon } from '@/components/ui/icons/icon-chevron'
import CustomInput from '@/components/ui/custom-input/custom-input'
import CustomTooltip from '@/components/ui/custom-tooltip/custom-tooltip'
import { InfoIcon } from '@/components/ui/icons/icon-info'

interface DimensionSelectorProps<T extends FieldValues> {
    title: string
    imageSrc: string
    name: Path<T>
    register: UseFormRegister<T>
    value: string
}

export default function DimensionSelector<T extends FieldValues>({
    title,
    imageSrc,
    name,
    register,
    value,
}: DimensionSelectorProps<T>) {
    const [isOpen, setIsOpen] = useState(true)

    const tooltipText =
        name === 'breite' ? 'Geben Sie die Breite an' : 'Geben Sie die Tiefe an'

    return (
        <div className='p-4'>
            <div
                className='flex items-center justify-between cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className='flex items-center gap-2'>
                    <ChevronIcon
                        className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                    <h3 className='text-sm lg:text-base font-semibold text-customGray-700'>
                        {title}
                    </h3>

                    <CustomTooltip content={tooltipText}>
                        <button>
                            <InfoIcon className='w-4 h-4' />
                        </button>
                    </CustomTooltip>
                </div>

                <span className='text-sm lg:text-base font-semibold text-customGray-700'>
                    {value || '0'} cm
                </span>
            </div>

            {isOpen && (
                <div className='mt-4 flex flex-col lg:flex-row gap-6'>
                    <div className='lg:w-1/2 flex'>
                        <Image
                            src={imageSrc}
                            alt={title}
                            width={350}
                            height={200}
                            className='object-cover'
                        />
                    </div>

                    <div className='lg:w-1/2 flex flex-col justify-center'>
                        <CustomInput
                            label='Enter the data in cm'
                            {...register(name, { required: true, min: 1 })}
                            type='number'
                            onlyNumbers
                            placeholder='Data'
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
