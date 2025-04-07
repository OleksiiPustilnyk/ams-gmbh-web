'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import CustomInput from '@/components/ui/custom-input/custom-input'
import CustomTextarea from '@/components/ui/custom-textarea/custom-textarea'
import CustomButton from '@/components/ui/buttons/custom-button'
import { useState } from 'react'
import ImagesUploader from '@/components/ui/admin/images-uploader/images-uploader'
import { AddBlogInput } from '@/view/admin-panel/blogs/blogs.types'

export default function AddBlogForm() {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<AddBlogInput>({
        defaultValues: {
            images: [],
        },
    })

    const onSubmit: SubmitHandler<AddBlogInput> = (data) => {
        if (!data.images || data.images.length === 0) {
            setImageError('Please upload at least one image')
            return
        }

        setImageError(null)

        console.log('FormData in submit', data)
    }

    // images
    const [imageError, setImageError] = useState<string | null>(null)

    const handleImagesChange = (newImages: File[]) => {
        setValue('images', newImages)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
                label='Title'
                required
                {...register('title', {
                    required: 'Title is required',
                })}
                error={errors.title}
                overrideRequiredMessage={true}
            />
            <CustomInput
                label='Blog category'
                required
                {...register('blogCategory', {
                    required: 'Blog category is required',
                })}
                error={errors.blogCategory}
                overrideRequiredMessage={true}
            />
            {/* to do rewrite on text editor */}
            <div className='col-span-1 md:col-span-2 mb-3'>
                <CustomTextarea
                    label='Blog content'
                    {...register('body')}
                    error={errors.body}
                />
            </div>
            <ImagesUploader
                value={watch('images') || []}
                onChange={handleImagesChange}
                error={errors.images?.message}
                imageError={imageError}
                setImageError={setImageError}
            />
            <p className='text-sm text-gray-500 mt-1 mb-1'>* Required fields</p>
            <CustomButton
                type='submit'
                centerText
                className='col-span-1 md:col-span-2 bg-customGray-700 text-white py-3 rounded-lg w-full text-center font-medium hover:bg-customGray-700/90 transition mt-1'
            >
                Create new blog
            </CustomButton>
        </form>
    )
}
