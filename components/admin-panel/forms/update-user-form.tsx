'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import CustomInput from '@/components/ui/custom-input/custom-input'
import CustomButton from '@/components/ui/buttons/custom-button'
import { UpdateUserInput } from '@/view/admin-panel/user/user.types'
import { EMAIL_REGEX } from '@/constants/admin/constants'

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
                        value: EMAIL_REGEX,
                        message: 'Invalid email',
                    },
                })}
                error={errors.email}
                overrideRequiredMessage={true}
            />
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
