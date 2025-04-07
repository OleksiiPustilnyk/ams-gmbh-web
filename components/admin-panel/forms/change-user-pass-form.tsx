'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import CustomButton from '@/components/ui/buttons/custom-button'
import { ChangeUserPassInput } from '@/view/admin-panel/user/user.types'
import PasswordInput from '@/components/ui/admin/password-input/password-input'

export default function ChangeUserPassForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<ChangeUserPassInput>()

    const onSubmit: SubmitHandler<ChangeUserPassInput> = (data) => {
        const { confirmPassword, ...dataToSend } = data

        console.log('Update User data:', dataToSend)
    }

    const password = watch('password')
    const oldPassword = watch('oldPassword')

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            // className='max-w-sm mx-auto mt-20'
            className='mt-20 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto'
        >
            <h2 className='text-xl font-semibold text-center mb-6'>
                Change your password
            </h2>
            <PasswordInput
                label='Old password'
                required
                register={register}
                error={errors.oldPassword}
                fieldName='oldPassword'
            />
            <PasswordInput
                label='New password'
                required
                register={register}
                error={errors.password}
                fieldName='password'
                validation={{
                    validate: (value) =>
                        value === oldPassword
                            ? 'New password should not match with old one'
                            : true,
                }}
            />
            <PasswordInput
                label='Confirm new password'
                required
                register={register}
                error={errors.confirmPassword}
                fieldName='confirmPassword'
                validation={{
                    validate: (value) =>
                        value === password || 'Passwords do not match',
                }}
            />
            <p className='text-sm text-gray-500 mt-1 mb-1'>* Required fields</p>
            <CustomButton
                type='submit'
                centerText
                className='bg-customGray-700 text-white py-3 rounded-lg w-full text-center font-medium hover:bg-customGray-700/90 transition mt-4'
            >
                Change password
            </CustomButton>
        </form>
    )
}
