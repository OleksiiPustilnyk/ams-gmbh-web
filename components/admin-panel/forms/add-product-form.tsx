'use client'

import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import CustomInput from '@/components/ui/custom-input/custom-input'
import CustomSelect from '@/components/ui/custom-select/custom-select'
import CustomTextarea from '@/components/ui/custom-textarea/custom-textarea'
import CustomButton from '@/components/ui/buttons/custom-button'
import {
    AddProductFormProps,
    AddProductInput,
    MeasurementUnitEnum,
} from '@/view/admin-panel/products/products.types'
import CustomMultiSelect from '@/components/ui/admin/links/custom-multi-select/custom-multi-select'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import ImagesUploader from '@/components/ui/admin/images-uploader/images-uploader'

// import CustomCheckbox from '../ui/custom-checkbox/custom-checkbox'

const categories = [
    {
        id: '1',
        name: 'Category 1',
        link: 'category-1',
    },
    {
        id: '2',
        name: 'Category 2',
        link: 'category-2',
    },
    {
        id: '3',
        name: 'Category 3',
        link: 'category-3',
    },
    {
        id: '4',
        name: 'Category 4',
        link: 'category-4',
    },
    {
        id: '5',
        name: 'Category 5',
        link: 'category-5',
    },
    {
        id: '6',
        name: 'Category 6',
        link: 'category-6',
    },
]
const testProducts = [
    { id: '1', name: 'Product 1', articleNumber: 'ART001' },
    { id: '2', name: 'Product 2', articleNumber: 'ART002' },
    {
        id: '3',
        name: 'Productdfbbbbbbbbbbbbbbbbbbb x fbdxvb sfhdssdfsdfgsdfg fgdsfgsdfgsdfg 3',
        articleNumber: 'ART003',
    },
    { id: '4', name: 'Product 4', articleNumber: 'ART004' },
    { id: '5', name: 'Product 5', articleNumber: 'ART005' },
]
// const testProducts = [
//     { id: '1', name: 'Product 1', articleNumber: 'ART001' },
//     { id: '2', name: 'Product 2', articleNumber: 'ART002' },
//     { id: '3', name: 'Product 3', articleNumber: 'ART003' },
//     { id: '4', name: 'Product 4', articleNumber: 'ART004' },
//     { id: '5', name: 'Product 5', articleNumber: 'ART005' },
//     { id: '6', name: 'Product 6', articleNumber: 'ART006' },
//     { id: '7', name: 'Product 7', articleNumber: 'ART007' },
//     { id: '8', name: 'Product 8', articleNumber: 'ART008' },
//     { id: '9', name: 'Product 9', articleNumber: 'ART009' },
//     { id: '10', name: 'Product 10', articleNumber: 'ART010' },
//     {
//         id: '11',
//         name: 'Super Long Product Name with Multiple Words to Test Display',
//         articleNumber: 'ART011',
//     },
//     { id: '12', name: 'Product 12', articleNumber: 'ART012' },
//     { id: '13', name: 'Product 13', articleNumber: 'ART013' },
//     {
//         id: '14',
//         name: 'Another Product with a Very Long Name to Test Text Overflow Behavior',
//         articleNumber: 'ART014',
//     },
//     { id: '15', name: 'Product 15', articleNumber: 'ART015' },
//     { id: '16', name: 'Short Product 16', articleNumber: 'ART016' },
//     {
//         id: '17',
//         name: 'Product with a moderately long name for testing purposes',
//         articleNumber: 'ART017',
//     },
//     { id: '18', name: 'Product 18', articleNumber: 'ART018' },
//     {
//         id: '19',
//         name: 'A very very long product name that will be used for testing long text wrapping in product lists',
//         articleNumber: 'ART019',
//     },
//     { id: '20', name: 'Product 20', articleNumber: 'ART020' },
//     { id: '21', name: 'Product 21', articleNumber: 'ART021' },
//     { id: '22', name: 'Product 22', articleNumber: 'ART022' },
//     { id: '23', name: 'Product 23', articleNumber: 'ART023' },
//     { id: '24', name: 'Product 24', articleNumber: 'ART024' },
//     { id: '25', name: 'Product 25', articleNumber: 'ART025' },
//     {
//         id: '26',
//         name: 'Product with an exceptionally long name to test UI handling of text',
//         articleNumber: 'ART026',
//     },
//     { id: '27', name: 'Product 27', articleNumber: 'ART027' },
//     { id: '28', name: 'Product 28', articleNumber: 'ART028' },
//     {
//         id: '29',
//         name: 'Another Product for Testing Long Names in Product Lists',
//         articleNumber: 'ART029',
//     },
//     { id: '30', name: 'Product 30', articleNumber: 'ART030' },
//     { id: '31', name: 'Product 31', articleNumber: 'ART031' },
//     { id: '32', name: 'Product 32', articleNumber: 'ART032' },
//     { id: '33', name: 'Product 33', articleNumber: 'ART033' },
//     { id: '34', name: 'Product 34', articleNumber: 'ART034' },
//     {
//         id: '35',
//         name: 'Product with long description for testing purposes',
//         articleNumber: 'ART035',
//     },
//     { id: '36', name: 'Product 36', articleNumber: 'ART036' },
//     { id: '37', name: 'Product 37', articleNumber: 'ART037' },
//     { id: '38', name: 'Product 38', articleNumber: 'ART038' },
//     { id: '39', name: 'Product 39', articleNumber: 'ART039' },
//     {
//         id: '40',
//         name: 'Super long name product designed to test long text wrapping functionality in a UI context',
//         articleNumber: 'ART040',
//     },
//     { id: '41', name: 'Product 41', articleNumber: 'ART041' },
//     { id: '42', name: 'Product 42', articleNumber: 'ART042' },
//     { id: '43', name: 'Product 43', articleNumber: 'ART043' },
//     { id: '44', name: 'Product 44', articleNumber: 'ART044' },
//     { id: '45', name: 'Product 45', articleNumber: 'ART045' },
//     { id: '46', name: 'Product 46', articleNumber: 'ART046' },
//     {
//         id: '47',
//         name: 'Product with extremely long name for comprehensive testing of UI elements when large text is involved',
//         articleNumber: 'ART047',
//     },
//     { id: '48', name: 'Product 48', articleNumber: 'ART048' },
//     { id: '49', name: 'Product 49', articleNumber: 'ART049' },
//     { id: '50', name: 'Product 50', articleNumber: 'ART050' },
// ]

export default function AddProductForm({ products }: AddProductFormProps) {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        control,
        formState: { errors },
    } = useForm<AddProductInput>({
        defaultValues: {
            isInStock: true,
            isPopular: false,
            categoryIds: [],
            relatedProducts: [],
            images: [],
        },
    })

    console.log('products', products)

    // for category select
    const categoryOptions = categories.map((e) => ({
        value: e.id,
        label: e.name,
    }))

    const onSubmit: SubmitHandler<AddProductInput> = (data) => {
        if (!data.images || data.images.length === 0) {
            setImageError('Please upload at least one image')
            return
        }

        setImageError(null)

        console.log('FormData in submit', data)
    }

    // related products
    const productsOptions = testProducts.map((e) => ({
        value: e.id,
        label: `${e.name} (${e.articleNumber})`,
    }))

    // images
    // const [imagePreviews, setImagePreviews] = useState<string[]>([])
    const [imageError, setImageError] = useState<string | null>(null)

    // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const files = event.target.files
    //     /////////
    //     if (!files || files.length === 0) {
    //         setImageError('Please upload at least one image')
    //         return
    //     }

    //     setImageError(null)

    //     if (files) {
    //         const newImages = Array.from(files)

    //         const validImages = newImages.filter((file) => {
    //             return file.size <= 5000000
    //         })

    //         if (validImages.length !== newImages.length) {
    //             setImageError('Some files are too large! Max size: 5MB')
    //             return
    //         }

    //         setImagePreviews((prevPreviews) => {
    //             prevPreviews.forEach((url) => URL.revokeObjectURL(url))
    //             return []
    //         })

    //         const existingImages = watch('images') || []
    //         setValue('images', [...existingImages, ...newImages])
    //         setImagePreviews((prevPreviews) => [
    //             ...prevPreviews,
    //             ...newImages.map((file) => URL.createObjectURL(file)),
    //         ])
    //     }
    // }
    // const removeImage = (index: number) => {
    //     const updatedImages = [...watch('images')]
    //     updatedImages.splice(index, 1)
    //     setValue('images', updatedImages)

    //     setImagePreviews((prevPreviews) =>
    //         prevPreviews.filter((_, i) => i !== index),
    //     )
    // }

    const handleImagesChange = (newImages: File[]) => {
        setValue('images', newImages)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            // className='bg-white p-6 rounded-lg shadow-lg w-full'
        >
            <CustomInput
                label='Name'
                required
                {...register('name', {
                    required: 'Name is required',
                })}
                error={errors.name}
                overrideRequiredMessage={true}
            />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <CustomInput
                    label='Article number'
                    required
                    {...register('articleNumber', {
                        required: 'Article number is required',
                    })}
                    error={errors.articleNumber}
                    overrideRequiredMessage={true}
                />
                <CustomSelect
                    label='Measurement unit *'
                    options={[
                        { value: '', label: 'Please select' },
                        {
                            value: MeasurementUnitEnum.LINEAR_METER,
                            label: 'Linear Meter',
                        },
                        { value: MeasurementUnitEnum.PIECE, label: 'Piece' },
                        { value: MeasurementUnitEnum.SET, label: 'Set' },
                        {
                            value: MeasurementUnitEnum.SIX_SET,
                            label: 'Six set (6x set)',
                        },
                        {
                            value: MeasurementUnitEnum.TWELVE_SET,
                            label: 'Twelve set (12x set)',
                        },
                        {
                            value: MeasurementUnitEnum.SQUARE_METER,
                            label: 'Square Meter (m²)',
                        },
                    ]}
                    {...register('measurementUnit', {
                        required: 'Measurement unit is required',
                    })}
                    value={watch('measurementUnit') || ''}
                    onChange={(value) =>
                        setValue(
                            'measurementUnit',
                            value as MeasurementUnitEnum,
                        )
                    }
                    error={errors.measurementUnit}
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <CustomInput
                    label='Price'
                    required
                    onlyNumbers
                    {...register('price', {
                        required: 'Price is required',
                    })}
                    error={errors.price}
                    overrideRequiredMessage={true}
                />
                <CustomInput
                    label='Discount price'
                    onlyNumbers
                    {...register('discountPrice')}
                    error={errors.discountPrice}
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <CustomInput
                    label='Product length'
                    {...register('length')}
                    error={errors.length}
                />
                <CustomInput
                    label='Paint'
                    {...register('paint')}
                    error={errors.paint}
                />
            </div>
            <CustomInput
                label='Additional information'
                {...register('additionalInfo')}
                error={errors.additionalInfo}
            />
            {/* to do rewrite on text editor */}
            <div className='col-span-1 md:col-span-2 mb-3'>
                <CustomTextarea
                    label='Product description'
                    {...register('description')}
                    error={errors.description}
                />
            </div>
            <div className='mb-3'>
                {/* <CustomMultiSelect
                    label='Categories'
                    options={categoryOptions}
                    value={watch('categoryIds') || []}
                    required={true}
                    onChange={(values) => setValue('categoryIds', values)}
                    error={
                        Array.isArray(errors.categoryIds)
                            ? errors.categoryIds[0]
                            : errors.categoryIds
                    }
                /> */}
                <Controller
                    name='categoryIds'
                    control={control}
                    rules={{
                        required: 'Please select at least one category',
                        validate: (value) =>
                            value.length > 0 ||
                            'Please select at least one category',
                    }}
                    render={({ field }) => (
                        <CustomMultiSelect
                            {...field}
                            label='Categories'
                            options={categoryOptions}
                            error={
                                Array.isArray(errors.categoryIds)
                                    ? errors.categoryIds[0]
                                    : errors.categoryIds
                            }
                            required
                        />
                    )}
                />
            </div>
            {/* <div>
                <label>Related products</label>
                <RelatedProductsSelect
                    value={relatedProducts}
                    onChange={handleRelatedProductsChange}
                />
            </div> */}
            <div className='mb-3'>
                <CustomMultiSelect
                    label='Related products'
                    options={productsOptions}
                    value={watch('relatedProducts') || []}
                    onChange={(values) => setValue('relatedProducts', values)}
                    error={
                        Array.isArray(errors.relatedProducts)
                            ? errors.relatedProducts[0]
                            : errors.relatedProducts
                    }
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-2'>
                <label className='flex items-center gap-2 text-sm text-customGray-700 font-medium'>
                    <input
                        type='checkbox'
                        {...register('isInStock')}
                        className='w-4 h-4'
                        defaultChecked={true}
                    />
                    <span>In Stock</span>
                </label>
                <label className='flex items-center gap-2 text-sm text-customGray-700 font-medium'>
                    <input
                        type='checkbox'
                        {...register('isPopular')}
                        className='w-4 h-4'
                    />
                    <span>Popular product</span>
                </label>
            </div>
            {/* <div className='mb-3'>
                <label className='block text-sm font-medium text-customGray-700 mb-2'>
                    Upload images (max 5mb) *
                </label>
                <input
                    type='file'
                    multiple
                    accept='image/*'
                    // {...register('images', {
                    //     required: 'Please upload at least one image',
                    // })}
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
                                // <Image
                                //     key={index}
                                //     src={preview}
                                //     width={40}
                                //     height={40}
                                //     alt={`preview-${index}`}
                                //     className='w-24 h-24 object-cover rounded-lg'
                                // />
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
                                        className='absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs'
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {errors.images && (
                    <p className='text-red-500 text-xs'>
                        {errors.images.message}
                    </p>
                )}

                {imageError && (
                    <p className='text-red-500 text-xs'>{imageError}</p>
                )}
            </div> */}
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
                Create new product
            </CustomButton>
        </form>
    )
}
