import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { MAX_IMAGE_SIZE } from '@/constants/admin/constants'

interface ImagesUploaderProps {
    value: File[]
    onChange: (files: File[]) => void
    error: string | undefined
    imageError: string | null
    setImageError: React.Dispatch<React.SetStateAction<string | null>>
    initialImageUrls?: string[]
}

export default function ImagesUploader({
    value,
    onChange,
    error,
    imageError,
    setImageError,
    initialImageUrls,
}: ImagesUploaderProps) {
    const [imagePreviews, setImagePreviews] = useState<string[]>([])

    const [initialImage, setInitialImage] = useState<string[]>([])

    useEffect(() => {
        if (initialImageUrls?.length) {
            setInitialImage(initialImageUrls)
        }
    }, [initialImageUrls])

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files

        if (!files || files.length === 0) {
            setImageError('Please upload at least one image')
            return
        }

        setImageError(null)

        const newImages = Array.from(files)

        const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp']

        const invalidFiles = newImages.filter((file) => {
            if (!allowedMimeTypes.includes(file.type)) {
                setImageError('Only JPEG, PNG, and WEBP formats are allowed')
                return true
            }
            if (file.size > MAX_IMAGE_SIZE) {
                setImageError(
                    `Some files are too large! Max size: ${MAX_IMAGE_SIZE / (1024 * 1024)} MB`,
                )
                return true
            }
            return false
        })

        if (invalidFiles.length > 0) return

        onChange([...value, ...newImages])

        setImagePreviews((prevPreviews) => [
            ...prevPreviews,
            ...newImages.map((file) => URL.createObjectURL(file)),
        ])
    }

    const removeImage = (index: number) => {
        const updatedImages = [...value]
        updatedImages.splice(index, 1)
        onChange(updatedImages)

        setImagePreviews((prevPreviews) => {
            URL.revokeObjectURL(prevPreviews[index])
            return prevPreviews.filter((_, i) => i !== index)
        })
    }

    const handlePreviousImageClick = (imageUrl: string) => {
        window.open(imageUrl, '_blank')
    }

    return (
        <div className='mb-3'>
            <label className='block text-sm font-medium text-customGray-700 mb-2'>
                Upload images{' '}
                <span className='text-gray-400'>
                    (max {MAX_IMAGE_SIZE / (1024 * 1024)} MB)
                </span>{' '}
                *
            </label>
            {initialImage.length > 0 && (
                <p className='text-sm text-gray-500 mb-2'>
                    <span className='text-red-500'>Attention!</span> Uploading
                    new images will replace all existing images.
                </p>
            )}
            <input
                type='file'
                multiple
                accept='image/*'
                onChange={handleImageChange}
                className='block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100'
            />
            <p className='text-sm text-gray-500 mt-1'>
                {imagePreviews.length > 0
                    ? `${imagePreviews.length} ${imagePreviews.length > 1 ? 'files' : 'file'} selected`
                    : 'No files selected'}
            </p>
            {imagePreviews.length > 0 && (
                <div className='mt-3'>
                    <h4 className='text-sm font-medium text-customGray-700'>
                        Image previews:
                    </h4>
                    <div className='flex space-x-2'>
                        {imagePreviews.map((preview, index) => (
                            <div key={index} className='relative'>
                                <Image
                                    src={preview}
                                    width={40}
                                    height={40}
                                    alt={`preview-${index}`}
                                    className='w-24 h-24 object-cover rounded-lg'
                                />
                                <button
                                    type='button'
                                    onClick={() => removeImage(index)}
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
                        ))}
                    </div>
                </div>
            )}
            {!imagePreviews.length && initialImage.length > 0 && (
                <div className='mt-3'>
                    <h4 className='text-sm font-medium text-customGray-700'>
                        Current product images:
                    </h4>
                    <div className='flex space-x-2'>
                        {initialImage.map((preview, index) => (
                            <div key={index}>
                                <Image
                                    src={preview}
                                    width={40}
                                    height={40}
                                    alt={`preview-${index}`}
                                    className='w-24 h-24 object-cover rounded-lg'
                                    onClick={() =>
                                        handlePreviousImageClick(preview)
                                    }
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {error && <p className='text-red-500 text-xs'>{error}</p>}
            {imageError && <p className='text-red-500 text-xs'>{imageError}</p>}
        </div>
    )
}
