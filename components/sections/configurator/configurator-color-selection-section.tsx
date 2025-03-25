'use client'

import { useState } from 'react'
import CustomTooltip from '@/components/ui/custom-tooltip/custom-tooltip'
import { InfoIcon } from '@/components/ui/icons/icon-info'

interface ColorOption {
    label: string
    value: string
    hex: string
}

const colors: ColorOption[] = [
    { label: 'Anthrazit (Ral 7016)', value: 'anthrazit', hex: '#667085' },
]

export default function ColorSelector() {
    const [selectedColor] = useState(colors[0])

    return (
        <div className='flex items-center justify-between p-4 bg-white'>
            <div className='flex items-center gap-2'>
                <h3 className='text-sm lg:text-base font-semibold text-customGray-700'>
                    Farbe
                </h3>
                <CustomTooltip content='Wähle Farbe'>
                    <button>
                        <InfoIcon className='w-4 h-4' />
                    </button>
                </CustomTooltip>
            </div>

            <div className='flex items-center gap-2'>
                <span
                    className='w-6 h-6 rounded-full border border-customGray-500'
                    style={{ backgroundColor: selectedColor.hex }}
                ></span>
                <span className='text-customGray-700 text-sm lg:text-base'>
                    {selectedColor.label}
                </span>
            </div>
        </div>
    )
}
