import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface ImagesUploaderProps {
    value: File[]
    onChange: (files: File[]) => void
    error: string | undefined
    imageError: string | null
    setImageError: React.Dispatch<React.SetStateAction<string | null>>
}

export default function ImagesUploader({
    value,
    onChange,
    error,
    imageError,
    setImageError,
}: ImagesUploaderProps) {
    const [imagePreviews, setImagePreviews] = useState<string[]>([])
    // const [imageError, setImageError] = useState<string | null>(null)

    // useEffect(() => {
    //     const previews = value.map((file) => URL.createObjectURL(file))
    //     setImagePreviews(previews)

    //     return () => previews.forEach((url) => URL.revokeObjectURL(url))
    // }, [value])

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files

        if (!files || files.length === 0) {
            setImageError('Please upload at least one image')
            return
        }

        setImageError(null)

        const newImages = Array.from(files)
        const validImages = newImages.filter((file) => file.size <= 5000000)

        if (validImages.length !== newImages.length) {
            setImageError('Some files are too large! Max size: 5MB')
            return
        }

        onChange([...value, ...validImages])

        setImagePreviews((prevPreviews) => [
            ...prevPreviews,
            ...validImages.map((file) => URL.createObjectURL(file)),
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

    return (
        <div className='mb-3'>
            <label className='block text-sm font-medium text-customGray-700 mb-2'>
                Upload images (max 5mb) *
            </label>
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
                                {/* <button
                                    type='button'
                                    onClick={() => removeImage(index)}
                                    className='absolute top-1 right-1 bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs'
                                >
                                    ✕
                                </button> */}
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
