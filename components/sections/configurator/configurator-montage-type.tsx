'use client'

import { UseFormRegister, FieldValues, Path } from 'react-hook-form'
import { ConfiguratorOption } from '@/interfaces/configurator-form.interface'
import Image from 'next/image'

interface MontageTypeSelectorProps<T extends FieldValues> {
    name: Path<T>
    selectedValue: string
    register: UseFormRegister<T>
    options: ConfiguratorOption[]
}

export default function MontageTypeSelector<T extends FieldValues>({
    name,
    selectedValue,
    register,
    options,
}: MontageTypeSelectorProps<T>) {
    return (
        <div className='flex gap-4'>
            {options.map((type) => (
                <label
                    key={type.value}
                    className={`cursor-pointer flex flex-col items-center w-full border rounded-md p-4 transition-all duration-200 ${
                        selectedValue === type.value
                            ? 'border-customYellow-600'
                            : 'border-gray-200'
                    }`}
                >
                    <input
                        type='radio'
                        value={type.value}
                        {...register(name)}
                        className='hidden'
                    />
                    {type.image && (
                        <Image
                            src={type.image}
                            alt={type.label}
                            width={340}
                            height={160}
                            className='object-contain'
                        />
                    )}
                    <span className='mt-2 text-customGray-700 text-sm font-semibold'>
                        {type.label}
                    </span>
                </label>
            ))}
        </div>
    )
}
