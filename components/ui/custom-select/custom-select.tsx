import { useState, useEffect, useRef } from 'react'
import { ChevronIcon } from '../icons/icon-chevron'
import { FieldError } from 'react-hook-form'

interface CustomSelectProps {
    label: string
    options: { value: string; label: string }[]
    value: string
    onChange: (value: string) => void
    disabled?: boolean
    error?: FieldError
}

export default function CustomSelect({
    label,
    options,
    value,
    onChange,
    disabled = false,
    error,
}: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    const selectRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    }, [isOpen])

    return (
        <div ref={selectRef} className='relative w-full'>
            <label className='text-[14px] text-primary font-medium mb-1 block'>
                {label}
            </label>

            <button
                type='button'
                disabled={disabled}
                onClick={() => setIsOpen((prev) => !prev)}
                className={`w-full px-3 py-2 border rounded-lg text-primary text-base text-left flex items-center justify-between 
                    ${
                        disabled
                            ? 'bg-secondaryWhite border-borderColor text-gray-500 cursor-not-allowed'
                            : error
                              ? 'border-red-500 focus:ring-red-500'
                              : 'bg-white border-borderColor focus:border-transparent focus:ring-1 focus:ring-defaultYellow'
                    }`}
            >
                <span>
                    {options.find((opt) => opt.value === value)?.label ||
                        'Bitte auswählen'}
                </span>

                <ChevronIcon
                    className={`transition-transform ${isOpen ? 'rotate-180' : ''} ${error ? 'text-red-500' : 'text-primary'}`}
                />
            </button>

            {isOpen && !disabled && (
                <ul className='absolute z-10 w-full mt-1 bg-white border border-borderColor rounded-lg shadow-lg overflow-hidden'>
                    {options.map((opt, index) => {
                        const isFirst = index === 0
                        const isLast = index === options.length - 1

                        return (
                            <li
                                key={opt.value}
                                onClick={() => {
                                    onChange(opt.value)
                                    setIsOpen(false)
                                }}
                                className={`px-3 py-2 cursor-pointer text-primary text-[14px] hover:bg-gray-100 
                                    ${value === opt.value ? 'bg-[#FFF3D3] font-medium' : ''}
                                    ${isFirst ? 'rounded-t-lg' : isLast ? 'rounded-b-lg' : ''}`}
                            >
                                {opt.label}
                            </li>
                        )
                    })}
                </ul>
            )}

            {error && (
                <p className='text-red-500 text-[12px] mt-1'>{error.message}</p>
            )}
        </div>
    )
}
