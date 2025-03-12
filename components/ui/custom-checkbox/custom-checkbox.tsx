import { useId } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { CheckIcon } from '../icons/icon-check'

interface CustomCheckboxProps {
    label: string
    error?: string
    register: UseFormRegisterReturn
    disabled?: boolean
}

export default function CustomCheckbox({
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
                className={`flex items-center cursor-pointer select-none ${
                    disabled ? 'cursor-not-allowed opacity-50' : ''
                }`}
            >
                <div
                    className={`w-5 h-5 flex items-center justify-center border border-customGray-300 rounded-md transition-all
                    bg-white peer-checked:bg-customYellow-500 peer-checked:border-customYellow-500
                    peer-hover:border-customYellow-500 peer-hover:bg-[#FFF8E1]
                    peer-focus:ring-2 peer-focus:ring-customYellow-500`}
                >
                    <CheckIcon className='w-3.5 h-3.5 text-white hidden peer-checked:block' />
                </div>

                <span className='text-sm text-gray-700 ml-2'>{label}</span>
            </label>

            {error && <p className='text-red-500 text-xs ml-2'>{error}</p>}
        </div>
    )
}
