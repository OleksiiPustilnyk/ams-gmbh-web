'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import CustomInput from '@/components/ui/custom-input/custom-input'
import CustomButton from '@/components/ui/buttons/custom-button'
import { PASSWORD_REGEX } from '@/constants/admin/constants'
import { useState } from 'react'
import { EyeIcon } from '@/components/ui/icons/icon-admin-eye'
import { EyeOffIcon } from '@/components/ui/icons/icon-admin-eye-off'
import { UpdateUserInput } from '@/view/admin-panel/user/user.types'

interface UpdateUserFormProps {
    user: UpdateUserInput
}

export default function UpdateUserForm({ user }: UpdateUserFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UpdateUserInput>({
        defaultValues: {
            ...user,
        },
    })

    // const [showPassword, setShowPassword] = useState(false)

    const onSubmit: SubmitHandler<UpdateUserInput> = (data) => {
        console.log('Update User data:', data)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            // className='max-w-sm mx-auto mt-20'
            className='mt-20 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto'
        >
            <h2 className='text-xl font-semibold text-center mb-6'>
                Update your profile
            </h2>
            <CustomInput
                label='Name'
                required
                {...register('username', {
                    required: 'Name is required',
                })}
                error={errors.username}
                overrideRequiredMessage={true}
            />
            <CustomInput
                label='Email'
                required
                {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email',
                    },
                })}
                error={errors.email}
                overrideRequiredMessage={true}
            />
            {/* <div className='relative'>
                <CustomInput
                    label='Password'
                    required
                    // type='password'
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 7,
                            message:
                                'Password must be at least 7 characters long',
                        },
                        pattern: {
                            value: PASSWORD_REGEX,
                            message:
                                'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                        },
                    })}
                    error={errors.password}
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
            </div> */}
            <p className='text-sm text-gray-500 mt-1 mb-1'>* Required fields</p>
            <CustomButton
                type='submit'
                centerText
                className='bg-customGray-700 text-white py-3 rounded-lg w-full text-center font-medium hover:bg-customGray-700/90 transition mt-4'
            >
                Update profile
            </CustomButton>
        </form>
    )
}
