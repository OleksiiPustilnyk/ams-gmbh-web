'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import CustomInput from '@/components/ui/custom-input/custom-input'
import CustomButton from '@/components/ui/buttons/custom-button'

import { AddUserInput } from '@/view/admin-panel/user/user.types'
import PasswordInput from '@/components/ui/admin/password-input/password-input'

export default function AddUserForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddUserInput>()

    const onSubmit: SubmitHandler<AddUserInput> = (data) => {
        console.log('Add User data:', data)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            // className='max-w-sm mx-auto mt-20'
            className='mt-20 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto'
        >
            <h2 className='text-xl font-semibold text-center mb-6'>
                Create new admin
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
            <PasswordInput
                label='Password'
                required
                register={register}
                error={errors.password}
                fieldName='password'
            />
            <p className='text-sm text-gray-500 mt-1 mb-1'>* Required fields</p>
            <p className='text-sm text-gray-500 mt-1 mb-1'>
                <span className='text-red-500'>Warning: </span> Maximum of 5
                admins are allowed.
            </p>
            <CustomButton
                type='submit'
                centerText
                className='bg-customGray-700 text-white py-3 rounded-lg w-full text-center font-medium hover:bg-customGray-700/90 transition mt-4'
            >
                Create admin
            </CustomButton>
        </form>
    )
}
