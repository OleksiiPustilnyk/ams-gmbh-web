'use client'

import {
    UseFormWatch,
    UseFormSetValue,
    FieldValues,
    Path,
    PathValue,
} from 'react-hook-form'
import CustomTooltip from '@/components/ui/custom-tooltip/custom-tooltip'
import CustomSelect from '@/components/ui/custom-select/custom-select'
import { InfoIcon } from '@/components/ui/icons/icon-info'
import { lightingOptions } from '@/constants/configurator-data'

interface LightingSelectorProps<T extends FieldValues> {
    watch: UseFormWatch<T>
    setValue: UseFormSetValue<T>
    name?: Path<T>
}

export default function LightingSelector<T extends FieldValues>({
    watch,
    setValue,
    name = 'lighting' as Path<T>,
}: LightingSelectorProps<T>) {
    const selectedLighting = watch(name) || lightingOptions[0].value

    const handleSelect = (value: string) => {
        setValue(name, value as PathValue<T, typeof name>, {
            shouldDirty: true,
            shouldValidate: true,
        })
    }

    return (
        <div className='flex lg:items-center flex-col lg:flex-row lg:justify-between p-4 bg-white'>
            <div className='flex items-center gap-2'>
                <h3 className='text-sm lg:text-base font-semibold text-customGray-700'>
                    Beleuchtung
                </h3>
                <CustomTooltip content='Beleuchtung auswählen'>
                    <button>
                        <InfoIcon className='w-4 h-4' />
                    </button>
                </CustomTooltip>
            </div>

            <div className='lg:w-64'>
                <CustomSelect
                    label=''
                    options={lightingOptions}
                    value={selectedLighting}
                    onChange={handleSelect}
                />
            </div>
        </div>
    )
}
