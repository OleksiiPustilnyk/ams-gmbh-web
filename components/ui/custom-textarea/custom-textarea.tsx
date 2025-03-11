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
                <label className='text-[14px] text-primary font-medium mb-1'>
                    {label}
                </label>

                <textarea
                    ref={ref}
                    disabled={disabled}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition resize-none
                        ${
                            disabled
                                ? 'bg-secondaryWhite border-borderColor text-gray-500 cursor-not-allowed'
                                : error
                                  ? 'border-red-500 focus:ring-red-500'
                                  : 'border-borderColor text-primary hover:border-defaultYellow focus:ring-2 focus:ring-borderColor focus:border-transparent'
                        }
                    `}
                    rows={4}
                    {...props}
                />

                {error && (
                    <p className='text-red-500 text-[12px] mt-1'>
                        {error.message}
                    </p>
                )}
            </div>
        )
    },
)

CustomTextarea.displayName = 'CustomTextarea'
export default CustomTextarea
