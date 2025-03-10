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
                    className={`w-5 h-5 flex items-center justify-center border border-borderColor rounded-md transition-all
                    bg-white peer-checked:bg-defaultYellow peer-checked:border-defaultYellow
                    peer-hover:border-defaultYellow peer-hover:bg-[#FFF8E1]
                    peer-focus:ring-2 peer-focus:ring-defaultYellow`}
                >
                    <CheckIcon className='w-3.5 h-3.5 text-white hidden peer-checked:block' />
                </div>

                <span className='text-[14px] text-gray-700 ml-2'>{label}</span>
            </label>

            {error && <p className='text-red-500 text-[12px] ml-2'>{error}</p>}
        </div>
    )
}
