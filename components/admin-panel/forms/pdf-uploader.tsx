'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import CustomButton from '@/components/ui/buttons/custom-button'

import { MAX_PDF_SIZE } from '@/constants/admin/constants'

type FormValues = {
    pdf: FileList
}

export default function PdfUploader() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log('FormData in submit', data)
        console.log('Uploading file:', data.pdf[0])
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='mt-10 bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto'
        >
            <label className='block text-lg font-medium text-customGray-700 mb-1'>
                Upload PDF catalog{' '}
                <span className='text-gray-400 text-base'>
                    (max {MAX_PDF_SIZE / (1024 * 1024)} MB)
                </span>
            </label>
            <p className='text-sm text-gray-500 mb-3'>
                <span className='text-red-500'>Attention!</span> Uploading new
                catalog will replace previous one.
            </p>
            <input
                type='file'
                accept='application/pdf'
                {...register('pdf', {
                    required: 'PDF file is required',
                    validate: (files) => {
                        if (!files || files.length === 0) {
                            return 'Please select a PDF file'
                        }
                        const file = files[0]
                        if (file.type !== 'application/pdf') {
                            return 'Only PDF files are allowed'
                        }
                        if (file.size > MAX_PDF_SIZE) {
                            return `File size must be less than ${MAX_PDF_SIZE / (1024 * 1024)} MB`
                        }
                        return true
                    },
                })}
                className='block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100 mb-2'
            />

            {errors.pdf && (
                <p className='text-red-500 text-sm'>{errors.pdf.message}</p>
            )}
            <CustomButton
                type='submit'
                centerText
                className='col-span-1 md:col-span-2 bg-customGray-700 text-white py-3 rounded-lg w-full text-center font-medium hover:bg-customGray-700/90 transition mt-4'
            >
                Save catalog
            </CustomButton>
        </form>
    )
}
