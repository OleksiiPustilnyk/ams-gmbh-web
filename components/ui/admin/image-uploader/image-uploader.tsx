import React, { useState } from 'react'
import Image from 'next/image'
import { MAX_IMAGE_SIZE } from '@/constants/admin/constants'

interface SingleImageUploaderProps {
    onChange: (file: File) => void
    error: string | undefined
    imageError: string | null
    setImageError: React.Dispatch<React.SetStateAction<string | null>>
    initialImageUrl?: string
}

export default function SingleImageUploader({
    onChange,
    error,
    imageError,
    setImageError,
    initialImageUrl,
}: SingleImageUploaderProps) {
    const [imagePreview, setImagePreview] = useState<string | null>(null)

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files

        if (!files || files.length === 0) {
            setImageError('Please upload an image')
            return
        }
        setImageError(null)

        const file = files[0]

        const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp']

        if (!allowedMimeTypes.includes(file.type)) {
            setImageError('Only JPEG, PNG, and WEBP formats are allowed')
            return
        }

        if (file.size > MAX_IMAGE_SIZE) {
            setImageError(
                `File size must be less than ${MAX_IMAGE_SIZE / (1024 * 1024)} MB`,
            )
            return
        }

        setImagePreview(URL.createObjectURL(file))

        onChange(file)
    }

    const handleRemoveImage = () => {
        setImagePreview(null)
        onChange(undefined as unknown as File)
    }

    const handlePreviousImageClick = (imageUrl: string) => {
        window.open(imageUrl, '_blank')
    }

    return (
        <div className='mb-3'>
            <label className='block text-sm font-medium text-customGray-700 mb-2'>
                Upload image{' '}
                <span className='text-gray-400'>
                    (max {MAX_IMAGE_SIZE / (1024 * 1024)} MB)
                </span>{' '}
                *
            </label>
            <input
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                className='block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100'
            />
            {imagePreview && (
                <div className='mt-3'>
                    <h4 className='text-sm font-medium text-customGray-700'>
                        Image preview:
                    </h4>
                    <div className='relative w-24 h-24'>
                        <Image
                            src={imagePreview}
                            width={40}
                            height={40}
                            alt='image-preview'
                            className='w-24 h-24 object-cover rounded-lg'
                        />
                        <button
                            type='button'
                            onClick={handleRemoveImage}
                            aria-label='Delete image'
                            className='absolute top-1 right-1 w-6 h-6 flex items-center justify-center rounded-full text-xs transition-colors duration-200'
                            style={{
                                backgroundColor: 'rgb(239, 155, 10)',
                                color: 'white',
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                    'rgb(191, 123, 5)')
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                    'rgb(239, 155, 10)')
                            }
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
            {!imagePreview && initialImageUrl && (
                <div className='mt-3'>
                    <h4 className='text-sm font-medium text-customGray-700'>
                        Current image:
                    </h4>
                    <div className='flex space-x-2'>
                        <Image
                            src={initialImageUrl}
                            width={40}
                            height={40}
                            alt='current-image'
                            className='w-24 h-24 object-cover rounded-lg'
                            onClick={() =>
                                handlePreviousImageClick(initialImageUrl)
                            }
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </div>
            )}
            {error && <p className='text-red-500 text-xs'>{error}</p>}
            {imageError && <p className='text-red-500 text-xs'>{imageError}</p>}
        </div>
    )
}
