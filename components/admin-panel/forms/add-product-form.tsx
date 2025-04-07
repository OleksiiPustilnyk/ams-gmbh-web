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
import { useState } from 'react'
import ImagesUploader from '@/components/ui/admin/images-uploader/images-uploader'

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

export default function AddProductForm({ products }: AddProductFormProps) {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        control,
        trigger,
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
    const [imageError, setImageError] = useState<string | null>(null)

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
                    onChange={(value) => {
                        setValue(
                            'measurementUnit',
                            value as MeasurementUnitEnum,
                        )
                        trigger('measurementUnit')
                    }}
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
