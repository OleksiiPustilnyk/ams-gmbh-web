import { InputHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    required?: boolean
    error?: FieldError
    onlyNumbers?: boolean
    overrideRequiredMessage?: boolean
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
    (
        {
            label,
            required,
            disabled,
            error,
            onlyNumbers,
            overrideRequiredMessage = false,
            ...props
        },
        ref,
    ) => {
        const handleKeyPress = (
            event: React.KeyboardEvent<HTMLInputElement>,
        ) => {
            if (onlyNumbers && !/[0-9]/.test(event.key)) {
                event.preventDefault()
            }
        }

        return (
            <div className='flex flex-col mb-3'>
                <label className='text-sm text-customGray-700 font-medium mb-1'>
                    {label}{' '}
                    {required && <span className='text-customGray-700'>*</span>}
                </label>
                <input
                    ref={ref}
                    {...props}
                    disabled={disabled}
                    onKeyPress={handleKeyPress}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition
                        ${
                            disabled
                                ? 'bg-customGray-50 border-customGray-300 text-gray-500 cursor-not-allowed'
                                : error
                                  ? 'border-red-500 focus:ring-red-500'
                                  : 'border-customGray-300 text-customGray-700 hover:border-customYellow-500 focus:ring-2 focus:ring-customGray-300 focus:border-transparent'
                        }
                    `}
                />
                {/* {error?.type === 'required' && (
                    <p className='text-red-500 text-xs mt-1'>
                        Dieses Feld muss ausgefüllt werden
                    </p>
                )} */}
                {error?.type === 'required' && !overrideRequiredMessage && (
                    <p className='text-red-500 text-xs mt-1'>
                        Dieses Feld muss ausgefüllt werden
                    </p>
                )}
                {error?.type === 'required' && overrideRequiredMessage && (
                    <p className='text-red-500 text-xs mt-1'>{error.message}</p>
                )}
                {error?.message && error.type !== 'required' && (
                    <p className='text-red-500 text-xs mt-1'>{error.message}</p>
                )}
            </div>
        )
    },
)

CustomInput.displayName = 'CustomInput'
export default CustomInput
