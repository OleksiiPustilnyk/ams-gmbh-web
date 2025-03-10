import { InputHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    required?: boolean
    error?: FieldError
    onlyNumbers?: boolean
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
    ({ label, required, disabled, error, onlyNumbers, ...props }, ref) => {
        const handleKeyPress = (
            event: React.KeyboardEvent<HTMLInputElement>,
        ) => {
            if (onlyNumbers && !/[0-9]/.test(event.key)) {
                event.preventDefault()
            }
        }

        return (
            <div className='flex flex-col mb-3'>
                <label className='text-[14px] text-primary font-medium mb-1'>
                    {label}{' '}
                    {required && <span className='text-primary'>*</span>}
                </label>
                <input
                    ref={ref}
                    {...props}
                    disabled={disabled}
                    onKeyPress={handleKeyPress}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition
                        ${
                            disabled
                                ? 'bg-secondaryWhite border-borderColor text-gray-500 cursor-not-allowed'
                                : error
                                  ? 'border-red-500 focus:ring-red-500'
                                  : 'border-borderColor text-primary hover:border-defaultYellow focus:ring-2 focus:ring-borderColor focus:border-transparent'
                        }
                    `}
                />
                {error?.type === 'required' && (
                    <p className='text-red-500 text-[12px] mt-1'>
                        Dieses Feld muss ausgefüllt werden
                    </p>
                )}
                {error?.message && error.type !== 'required' && (
                    <p className='text-red-500 text-[12px] mt-1'>
                        {error.message}
                    </p>
                )}
            </div>
        )
    },
)

CustomInput.displayName = 'CustomInput'
export default CustomInput
