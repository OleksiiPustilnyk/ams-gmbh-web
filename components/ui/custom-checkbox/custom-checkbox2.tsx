'use client'

import { useId } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { CheckIcon } from '../icons/icon-check'

interface CustomCheckboxProps {
    label: string
    error?: string
    register: UseFormRegisterReturn
    disabled?: boolean
}

export default function CustomCheckbox2({
    label,
    error,
    register,
    disabled = false,
}: CustomCheckboxProps) {
    const id = useId()

    return (
        <div className='flex items-center'>
            <input
                type='checkbox'
                id={id}
                {...register}
                disabled={disabled}
                className='hidden peer'
            />

            <label
                htmlFor={id}
                className={`flex items-center cursor-pointer gap-2 text-customGray-700 text-base ${
                    disabled ? 'cursor-not-allowed opacity-50' : ''
                }`}
            >
                <div
                    className={`w-5 h-5 flex items-center justify-center border rounded-md transition-all
                    border-gray-400 bg-white hover:bg-customYellow-50 hover:border-customYellow-400
                    peer-checked:border-customYellow-700 peer-checked:bg-customYellow-700`}
                >
                    <CheckIcon className='w-3 h-2 text-white hidden peer-checked:inline-block' />
                </div>
                {label}
            </label>

            {error && <p className='text-red-500 text-xs ml-2'>{error}</p>}
        </div>
    )
}
