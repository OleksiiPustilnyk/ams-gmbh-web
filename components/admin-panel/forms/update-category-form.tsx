'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import CustomInput from '@/components/ui/custom-input/custom-input'
import CustomButton from '@/components/ui/buttons/custom-button'
import { useState } from 'react'
import { UpdateCategoryInput } from '@/view/admin-panel/categories/categories.types'
import SingleImageUploader from '@/components/ui/admin/image-uploader/image-uploader'

const mockedCategoryImage = {
    _id: '1',
    url: 'http://localhost:3001/uploads/images/product/images-1741877358688-972873134.webp',
    originalName: 'image1.webp',
}

interface UpdateCategoryFormProps {
    category: UpdateCategoryInput
}

export default function UpdateCategoryForm({
    category,
}: UpdateCategoryFormProps) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<UpdateCategoryInput>({
        defaultValues: {
            ...category,
        },
    })
    const [imageError, setImageError] = useState<string | null>(null)

    const onSubmit: SubmitHandler<UpdateCategoryInput> = async (data) => {
        try {
            console.log('Category updated successfully!', data)
        } catch (error) {
            console.error('Error updating Category:', error)
        }
    }

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
                initialImageUrl={mockedCategoryImage.url}
            />
            <p className='text-sm text-gray-500 mt-1 mb-1'>* Required fields</p>
            <CustomButton
                type='submit'
                centerText
                className='col-span-1 md:col-span-2 bg-customGray-700 text-white py-3 rounded-lg w-full text-center font-medium hover:bg-customGray-700/90 transition mt-1'
            >
                Update category
            </CustomButton>
        </form>
    )
}
