'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
    UseFormWatch,
    UseFormSetValue,
    FieldValues,
    Path,
    PathValue,
} from 'react-hook-form'
import CustomTooltip from '@/components/ui/custom-tooltip/custom-tooltip'
import { ChevronIcon } from '@/components/ui/icons/icon-chevron'
import { InfoIcon } from '@/components/ui/icons/icon-info'
import CustomRadioGroup from '@/components/ui/custom-radio/custom-radio'
import { groundOptions } from '@/constants/configurator-data'
import { getOptionLabel } from '@/utils/configurator-utils'

interface GroundTypeSelectorProps<T extends FieldValues> {
    watch: UseFormWatch<T>
    setValue: UseFormSetValue<T>
    name?: Path<T>
}

export default function GroundTypeSelector<T extends FieldValues>({
    watch,
    setValue,
    name = 'groundType' as Path<T>,
}: GroundTypeSelectorProps<T>) {
    const [isOpen, setIsOpen] = useState(true)

    const selected = watch(name) || groundOptions[0].value

    const handleChange = (value: string) => {
        setValue(name, value as PathValue<T, typeof name>, {
            shouldValidate: true,
            shouldDirty: true,
        })
    }

    return (
        <div className='p-4 bg-white'>
            <div
                className='flex items-center justify-between cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className='flex items-center gap-2'>
                    <ChevronIcon
                        className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                    <h3 className='text-sm lg:text-base font-semibold text-customGray-700'>
                        Bodenart
                    </h3>
                    <CustomTooltip content='Bodenart auswählen'>
                        <button className='text-customGray-500 hover:text-customGray-700'>
                            <InfoIcon className='w-4 h-4' />
                        </button>
                    </CustomTooltip>
                </div>
                <span className='text-sm lg:text-base font-semibold text-customGray-700'>
                    {getOptionLabel(selected, groundOptions)}
                </span>
            </div>

            {isOpen && (
                <div className='mt-4 flex gap-4'>
                    {groundOptions.map((option) => (
                        <div key={option.value} className='w-1/2 flex flex-col'>
                            <CustomRadioGroup
                                options={[
                                    {
                                        label: option.label,
                                        value: option.value,
                                    },
                                ]}
                                value={selected}
                                onChange={handleChange}
                            />
                            <Image
                                src={option.image || ''}
                                alt={option.label}
                                width={200}
                                height={200}
                                className='object-contain w-full h-full mt-2'
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
