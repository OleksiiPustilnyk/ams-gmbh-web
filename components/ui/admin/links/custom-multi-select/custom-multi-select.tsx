import { ChevronIcon } from '@/components/ui/icons/icon-chevron'
import { useState, useEffect, useRef } from 'react'

import { FieldError } from 'react-hook-form'

interface Option {
    value: string
    label: string
}

interface CustomMultiSelectProps {
    label: string
    options: Option[]
    value: string[]
    onChange: (values: string[]) => void
    disabled?: boolean
    error?: FieldError
    required?: boolean
}

export default function CustomMultiSelect({
    label,
    options,
    value,
    onChange,
    disabled = false,
    error,
    required = false,
}: CustomMultiSelectProps) {
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

    const toggleOption = (optionValue: string) => {
        const newValues = value.includes(optionValue)
            ? value.filter((v) => v !== optionValue)
            : [...value, optionValue]
        onChange(newValues)
    }

    return (
        <div ref={selectRef} className='relative w-full'>
            <label className='text-sm text-customGray-700 font-medium mb-1 block'>
                {label}
                {required && <span> *</span>}
            </label>

            <button
                type='button'
                disabled={disabled}
                onClick={() => setIsOpen((prev) => !prev)}
                className={`w-full px-3 py-2 border rounded-lg text-customGray-700 text-base text-left flex items-center justify-between
                    ${
                        disabled
                            ? 'bg-customGray-50 border-customGray-300 text-gray-500 cursor-not-allowed'
                            : error
                              ? 'border-red-500 focus:ring-red-500'
                              : 'bg-white border-customGray-300 focus:border-transparent focus:ring-1 focus:ring-customYellow-500'
                    }`}
            >
                <span>
                    {value.length > 0
                        ? options
                              .filter((opt) => value.includes(opt.value))
                              .map((opt) => opt.label)
                              .join(', ')
                        : 'Please select'}
                </span>

                <ChevronIcon
                    className={`transition-transform ${isOpen ? 'rotate-180' : ''} ${error ? 'text-red-500' : 'text-customGray-700'}`}
                />
            </button>

            {isOpen && !disabled && (
                <ul className='absolute z-10 w-full mt-1 bg-white border border-customGray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto'>
                    {options.map((opt, index) => {
                        const isFirst = index === 0
                        const isLast = index === options.length - 1
                        const isSelected = value.includes(opt.value)

                        return (
                            <li
                                key={opt.value}
                                onClick={() => toggleOption(opt.value)}
                                className={`px-3 py-2 cursor-pointer text-customGray-700 text-sm hover:bg-gray-100 flex items-center gap-2
                                    ${isSelected ? 'bg-customYellow-100 font-medium' : ''}
                                    ${isFirst ? 'rounded-t-lg' : isLast ? 'rounded-b-lg' : ''}`}
                            >
                                <input
                                    type='checkbox'
                                    checked={isSelected}
                                    onChange={() => toggleOption(opt.value)}
                                    className='form-checkbox text-customYellow-500 focus:ring-customYellow-500'
                                />
                                {opt.label}
                            </li>
                        )
                    })}
                </ul>
            )}

            {error && (
                <p className='text-red-500 text-xs mt-1'>{error.message}</p>
            )}
        </div>
    )
}
