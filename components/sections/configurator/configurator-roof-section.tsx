'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
    UseFormWatch,
    UseFormSetValue,
    FieldValues,
    Path,
    PathValue,
} from 'react-hook-form'
import { ChevronIcon } from '@/components/ui/icons/icon-chevron'
import CustomTooltip from '@/components/ui/custom-tooltip/custom-tooltip'
import { InfoIcon } from '@/components/ui/icons/icon-info'
import { roofOptions } from '@/constants/configurator-data'
import { getOptionLabel } from '@/utils/configurator-utils'

interface RoofSelectionProps<T extends FieldValues> {
    watch: UseFormWatch<T>
    setValue: UseFormSetValue<T>
    name?: Path<T>
}

export default function RoofSelection<T extends FieldValues>({
    watch,
    setValue,
    name = 'roofType' as Path<T>,
}: RoofSelectionProps<T>) {
    const [isOpen, setIsOpen] = useState(true)
    const selectedValue = watch(name)

    const handleSelect = (value: string) => {
        setValue(name, value as PathValue<T, typeof name>, {
            shouldValidate: true,
            shouldDirty: true,
        })
    }

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
                        Dacheindeckung
                    </h3>
                    <CustomTooltip content='Dachmaterial wählen'>
                        <button>
                            <InfoIcon className='w-4 h-4' />
                        </button>
                    </CustomTooltip>
                </div>
                <span className='text-sm lg:text-base font-semibold text-customGray-700'>
                    {getOptionLabel(selectedValue, roofOptions)}
                </span>
            </div>

            {isOpen && (
                <div className='mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4'>
                    {roofOptions.map((option) => (
                        <button
                            key={option.value}
                            type='button'
                            className={`flex flex-col items-center border rounded-md transition-all duration-200 ${
                                selectedValue === option.value
                                    ? 'border-customYellow-600'
                                    : 'border-gray-200'
                            }`}
                            onClick={() => handleSelect(option.value)}
                        >
                            <Image
                                src={option.image || ''}
                                alt={option.label}
                                width={170}
                                height={80}
                                className='object-contain'
                            />
                            <span className='mt-2 text-customGray-700 font-normal text-sm'>
                                {option.label}
                            </span>
                            {option.subtitle && (
                                <span className='mb-2 text-customGray-700 font-normal text-xs lg:text-sm'>
                                    {option.subtitle}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
