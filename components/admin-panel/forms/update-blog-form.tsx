'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import CustomInput from '@/components/ui/custom-input/custom-input'
import CustomTextarea from '@/components/ui/custom-textarea/custom-textarea'
import CustomButton from '@/components/ui/buttons/custom-button'
import { useState } from 'react'
import ImagesUploader from '@/components/ui/admin/images-uploader/images-uploader'
import { UpdateBlogInput } from '@/view/admin-panel/blogs/blogs.types'

const mockedBlogImages = [
    {
        _id: '1',
        url: 'http://localhost:3001/uploads/images/product/images-1741877358688-972873134.webp',
        originalName: 'image1.webp',
    },
    {
        _id: '2',
        url: 'http://localhost:3001/uploads/images/product/images-1741877358690-961400164.webp',
        originalName: 'image2.webp',
    },
]

interface UpdateBlogFormProps {
    blog: UpdateBlogInput
}

export default function UpdateBlogForm({ blog }: UpdateBlogFormProps) {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<UpdateBlogInput>({
        defaultValues: {
            ...blog,
            images: blog.images || [],
        },
    })
    const [imageError, setImageError] = useState<string | null>(null)

    // to do
    // const initialPreviews = blog?.imageIds?.map((img) => ({
    //     id: img._id.toString(),
    //     url: img.url,
    //     originalName: img.originalName,
    // }))
    const initialPreviews = mockedBlogImages.map((img) => img.url)

    const onSubmit: SubmitHandler<UpdateBlogInput> = async (data) => {
        try {
            console.log('Blog updated successfully!', data)
        } catch (error) {
            console.error('Error updating blog:', error)
        }
    }

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
                initialImageUrls={initialPreviews}
            />
            <p className='text-sm text-gray-500 mt-1 mb-1'>* Required fields</p>
            <CustomButton
                type='submit'
                centerText
                className='col-span-1 md:col-span-2 bg-customGray-700 text-white py-3 rounded-lg w-full text-center font-medium hover:bg-customGray-700/90 transition mt-1'
            >
                Update blog
            </CustomButton>
        </form>
    )
}
