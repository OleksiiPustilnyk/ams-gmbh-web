'use client'

import { useState } from 'react'
import {
    UseFormWatch,
    UseFormSetValue,
    FieldValues,
    Path,
    PathValue,
} from 'react-hook-form'

import CustomTooltip from '@/components/ui/custom-tooltip/custom-tooltip'
import CustomSelect from '@/components/ui/custom-select/custom-select'
import CustomCheckbox from '@/components/ui/custom-checkbox/custom-checkbox'
import { ChevronIcon } from '@/components/ui/icons/icon-chevron'
import { InfoIcon } from '@/components/ui/icons/icon-info'

import {
    glassHeightOptions,
    glassSideOptions,
} from '@/constants/configurator-data'

interface GlassSliderSelectorProps<T extends FieldValues> {
    watch: UseFormWatch<T>
    setValue: UseFormSetValue<T>
    heightName?: Path<T>
    sidesName?: Path<T>
}

export default function GlassSliderSelector<T extends FieldValues>({
    watch,
    setValue,
    heightName = 'glassHeight' as Path<T>,
    sidesName = 'glassSides' as Path<T>,
}: GlassSliderSelectorProps<T>) {
    const [isOpen, setIsOpen] = useState(true)

    const selectedHeight = watch(heightName) || glassHeightOptions[0].value
    const selectedSides: string[] = watch(sidesName) || []

    const toggleSide = (side: string) => {
        const updated = selectedSides.includes(side)
            ? selectedSides.filter((s) => s !== side)
            : [...selectedSides, side]

        setValue(sidesName, updated as PathValue<T, typeof sidesName>, {
            shouldValidate: true,
            shouldDirty: true,
        })
    }

    const handleHeightChange = (value: string) => {
        setValue(heightName, value as PathValue<T, typeof heightName>, {
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
                        className={`transition-transform ${
                            isOpen ? 'rotate-180' : ''
                        }`}
                    />
                    <h3 className='text-sm lg:text-base font-semibold text-customGray-700'>
                        Glasschiebeelements
                    </h3>
                    <CustomTooltip content='This is a Glasschiebeelements description'>
                        <button className='text-gray-500 hover:text-gray-700'>
                            <InfoIcon className='w-4 h-4' />
                        </button>
                    </CustomTooltip>
                </div>
                <span className='text-sm lg:text-base font-semibold text-customGray-700'>
                    {
                        glassHeightOptions.find(
                            (o) => o.value === selectedHeight,
                        )?.label
                    }
                    {selectedSides.length === 1 && (
                        <>
                            {' '}
                            {
                                glassSideOptions.find(
                                    (o) => o.value === selectedSides[0],
                                )?.label
                            }
                        </>
                    )}
                </span>
            </div>

            {isOpen && (
                <div className='mt-4'>
                    <CustomSelect
                        label='Höhe Dachrinne'
                        options={glassHeightOptions}
                        value={selectedHeight}
                        onChange={handleHeightChange}
                    />

                    <div className='mt-4 space-y-2'>
                        {glassSideOptions.map((option) => (
                            <CustomCheckbox
                                key={option.value}
                                label={option.label}
                                checked={selectedSides.includes(option.value)}
                                onChange={() => toggleSide(option.value)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
