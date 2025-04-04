'use client'

import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import CustomInput from '@/components/ui/custom-input/custom-input'
import CustomSelect from '@/components/ui/custom-select/custom-select'
import CustomTextarea from '@/components/ui/custom-textarea/custom-textarea'
import CustomButton from '@/components/ui/buttons/custom-button'
import {
    MeasurementUnitEnum,
    UpdateProductInput,
} from '@/view/admin-panel/products/products.types'
import CustomMultiSelect from '@/components/ui/admin/links/custom-multi-select/custom-multi-select'
import { useState } from 'react'
import ImagesUploader from '@/components/ui/admin/images-uploader/images-uploader'
import { testProducts } from '@/app/admin/products/page'

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

const mockedProductImage = [
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

interface UpdateProductFormProps {
    product: UpdateProductInput
}

export default function UpdateProductForm({ product }: UpdateProductFormProps) {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        control,
        trigger,
        formState: { errors },
    } = useForm<UpdateProductInput>({
        defaultValues: {
            ...product,
            categoryIds: product.categoryIds || [],
            relatedProducts: product.relatedProducts || [],
            images: product.images || [],
        },
    })

    console.log('Default categoryIds:', product.categoryIds)

    const [imageError, setImageError] = useState<string | null>(null)

    // to do
    // const initialPreviews = product?.imageIds?.map((img) => ({
    //     id: img._id.toString(),
    //     url: img.url,
    //     originalName: img.originalName,
    // }))
    const initialPreviews = mockedProductImage.map(
        (img) => img.url,

        // {
        // id: img._id.toString(),
        // url: img.url,
        // originalName: img.originalName,
        // }
    )

    // to do fetch Categories and RelatedProducts
    // const [categories, setCategories] = useState([])
    // const [relatedProducts, setRelatedProducts] = useState([])

    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         const response = await fetch('/api/categories')
    //         const data = await response.json()
    //         setCategories(data)
    //     }

    //     const fetchRelatedProducts = async () => {
    //         const response = await fetch('/api/products/related-products')
    //         const data = await response.json()
    //         setRelatedProducts(data)
    //     }

    //     fetchCategories()
    //     fetchRelatedProducts()
    // }, [])

    const onSubmit: SubmitHandler<UpdateProductInput> = async (data) => {
        try {
            console.log('Product updated successfully!', data)
        } catch (error) {
            console.error('Error updating product:', error)
        }
    }

    // for category select
    const categoryOptions = categories.map((e) => ({
        value: e.id,
        label: e.name,
    }))

    // related products
    const productsOptions = testProducts.map((e) => ({
        value: e.id,
        label: `${e.name} (${e.articleNumber})`,
    }))

    // images
    const handleImagesChange = (newImages: File[]) => {
        setValue('images', newImages)
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
                initialImageUrls={initialPreviews}
            />
            <p className='text-sm text-gray-500 mt-1 mb-1'>* Required fields</p>
            <CustomButton
                type='submit'
                centerText
                className='col-span-1 md:col-span-2 bg-customGray-700 text-white py-3 rounded-lg w-full text-center font-medium hover:bg-customGray-700/90 transition mt-1'
            >
                Update product
            </CustomButton>
        </form>
    )
}
