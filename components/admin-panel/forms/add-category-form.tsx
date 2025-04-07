'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import CustomInput from '@/components/ui/custom-input/custom-input'
import CustomButton from '@/components/ui/buttons/custom-button'
import { useState } from 'react'
import { AddCategoryInput } from '@/view/admin-panel/categories/categories.types'
import SingleImageUploader from '@/components/ui/admin/image-uploader/image-uploader'

export default function AddCategoryForm() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<AddCategoryInput>()

    const onSubmit: SubmitHandler<AddCategoryInput> = (data) => {
        if (!data.image) {
            setImageError('Please upload at least one image')
            return
        }

        setImageError(null)

        console.log('FormData in submit', data)
    }

    // images
    const [imageError, setImageError] = useState<string | null>(null)

    const handleImageChange = (newImage: File) => {
        setValue('image', newImage)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
                label='Name'
                required
                {...register('name', {
                    required: 'Name is required',
                })}
                error={errors.name}
                overrideRequiredMessage={true}
            />
            <CustomInput
                label='Link'
                required
                {...register('link', {
                    required: 'Link category is required',
                })}
                error={errors.link}
                overrideRequiredMessage={true}
            />
            <SingleImageUploader
                onChange={handleImageChange}
                error={errors.image?.message}
                imageError={imageError}
                setImageError={setImageError}
            />
            <p className='text-sm text-gray-500 mt-1 mb-1'>* Required fields</p>
            <CustomButton
                type='submit'
                centerText
                className='col-span-1 md:col-span-2 bg-customGray-700 text-white py-3 rounded-lg w-full text-center font-medium hover:bg-customGray-700/90 transition mt-1'
            >
                Create new category
            </CustomButton>
        </form>
    )
}
