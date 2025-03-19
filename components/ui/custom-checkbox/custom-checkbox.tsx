'use client'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '../icons/icon-check'

interface CustomCheckboxProps {
    label: string
    checked: boolean
    onChange: () => void
}

export default function CustomCheckbox({
    label,
    checked,
    onChange,
}: CustomCheckboxProps) {
    return (
        <label className='flex items-center cursor-pointer space-x-2 text-gray-700'>
            <Checkbox.Root
                checked={checked}
                onCheckedChange={onChange}
                className='w-4 h-4 flex items-center justify-center border border-gray-400 rounded-md transition-all data-[state=checked]:border-customYellow-700 data-[state=checked]:bg-customYellow-50 hover:bg-customYellow-50 hover:border-customYellow-400'
            >
                <Checkbox.Indicator>
                    <CheckIcon className='text-customYellow-700 w-3 h-2' />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <span className='text-customGray-700'>{label}</span>
        </label>
    )
}
