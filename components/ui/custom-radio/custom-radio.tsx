'use client'

import * as RadioGroup from '@radix-ui/react-radio-group'

interface CustomRadioGroupProps {
    options: { label: string; value: string }[]
    value: string
    onChange: (value: string) => void
}

export default function CustomRadioGroup({
    options,
    value,
    onChange,
}: CustomRadioGroupProps) {
    return (
        <RadioGroup.Root
            value={value}
            onValueChange={onChange}
            className='flex flex-col space-y-2'
        >
            {options.map((option) => (
                <label
                    key={option.value}
                    className='flex items-center space-x-2 cursor-pointer group'
                >
                    <RadioGroup.Item
                        value={option.value}
                        className='w-4 h-4 border border-customGray-300 rounded-full flex items-center justify-center hover:border-customYellow-400 hover:bg-customYellow-50 data-[state=checked]:bg-customYellow-50 data-[state=checked]:border-customYellow-700 transition-all'
                    >
                        <RadioGroup.Indicator className='w-2 h-2 bg-customYellow-700 rounded-full' />
                    </RadioGroup.Item>
                    <span className='text-customGray-700 font-normal text-sm transition-all'>
                        {option.label}
                    </span>
                </label>
            ))}
        </RadioGroup.Root>
    )
}
