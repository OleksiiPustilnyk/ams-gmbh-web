import { TextareaHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

interface CustomTextareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string
    error?: FieldError
}

const CustomTextarea = forwardRef<HTMLTextAreaElement, CustomTextareaProps>(
    ({ label, error, disabled, ...props }, ref) => {
        return (
            <div className='flex flex-col'>
                <label className='text-sm text-customGray-700 font-medium mb-1'>
                    {label}
                </label>

                <textarea
                    ref={ref}
                    disabled={disabled}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition resize-none
                        ${
                            disabled
                                ? 'bg-customGray-50 border-customGray-300 text-gray-500 cursor-not-allowed'
                                : error
                                  ? 'border-red-500 focus:ring-red-500'
                                  : 'border-customGray-300 text-customGray-700 hover:border-customYellow-500 focus:ring-2 focus:ring-customGray-300 focus:border-transparent'
                        }
                    `}
                    rows={4}
                    {...props}
                />

                {error && (
                    <p className='text-red-500 text-xs mt-1'>{error.message}</p>
                )}
            </div>
        )
    },
)

CustomTextarea.displayName = 'CustomTextarea'
export default CustomTextarea
