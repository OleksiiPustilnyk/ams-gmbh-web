import React, { useState } from 'react'
import { PASSWORD_REGEX } from '@/constants/admin/constants'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { EyeOffIcon } from '../../icons/icon-admin-eye-off'
import { EyeIcon } from '../../icons/icon-admin-eye'
import CustomInput from '../../custom-input/custom-input'

interface PasswordInputProps {
    label: string
    required: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: UseFormRegister<any>
    error?: FieldError
    fieldName: string
    validation?: object
}

export default function PasswordInput({
    label,
    required = true,
    register,
    error,
    fieldName,
    validation = {},
}: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='relative'>
            <CustomInput
                label={label}
                required={required}
                type={showPassword ? 'text' : 'password'}
                {...register(fieldName, {
                    required: 'Password is required',
                    minLength: {
                        value: 7,
                        message: 'Password must be at least 7 characters long',
                    },
                    pattern: {
                        value: PASSWORD_REGEX,
                        message:
                            'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                    },
                    ...validation,
                })}
                error={error}
                overrideRequiredMessage={true}
            />
            <button
                type='button'
                className='absolute right-3 top-11 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? (
                    <EyeOffIcon className='w-6 h-6' />
                ) : (
                    <EyeIcon className='w-6 h-6' />
                )}
            </button>
        </div>
    )
}
