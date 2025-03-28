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
import { ChevronIcon } from '@/components/ui/icons/icon-chevron'
import { InfoIcon } from '@/components/ui/icons/icon-info'
import CustomRadioGroup from '@/components/ui/custom-radio/custom-radio'
import { instructionOptions } from '@/constants/configurator-data'
import { getOptionLabel } from '@/utils/configurator-utils'

interface InstructionsSelectorProps<T extends FieldValues> {
    watch: UseFormWatch<T>
    setValue: UseFormSetValue<T>
    name?: Path<T>
}

export default function InstructionsSelector<T extends FieldValues>({
    watch,
    setValue,
    name = 'instructions' as Path<T>,
}: InstructionsSelectorProps<T>) {
    const [isOpen, setIsOpen] = useState(true)
    const selected = watch(name) || instructionOptions[0].value

    const handleChange = (val: string) => {
        setValue(name, val as PathValue<T, typeof name>, {
            shouldDirty: true,
            shouldValidate: true,
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
                        Anleitung
                    </h3>
                    <CustomTooltip content='This is an Anleitung description'>
                        <button className='text-customGray-500 hover:text-customGray-700'>
                            <InfoIcon className='w-4 h-4' />
                        </button>
                    </CustomTooltip>
                </div>

                <span className='text-sm lg:text-base font-semibold text-customGray-700'>
                    {getOptionLabel(selected, instructionOptions)}
                </span>
            </div>

            {isOpen && (
                <div className='mt-4'>
                    <CustomRadioGroup
                        options={instructionOptions.map(({ value, label }) => ({
                            value,
                            label,
                        }))}
                        value={selected}
                        onChange={handleChange}
                    />
                </div>
            )}
        </div>
    )
}
