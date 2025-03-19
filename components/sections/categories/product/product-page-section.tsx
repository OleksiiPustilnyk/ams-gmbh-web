'use client'

import CustomButton from '@/components/ui/buttons/custom-button'
import { Product } from '@/interfaces/product.interface'
import ImageSlider from '@/components/image-slider/image-slider'
import ProductTabs from '@/components/product-tabs/product-tabs'
import ProductDescriptionRenderer from './product-description-render-section'
import ProductSpecificationRenderer from './product-specification-render-section'
import ProductAdditionalInfoRenderer from './product-additional-info-render'
import { CheckCircleIcon } from '@/components/ui/icons/icon-check-circle'

interface ProductPageSectionProps {
    product: Product
}

const productImages = [
    '/images/product-section/img-product-alum.png',
    '/images/categories/img-bausatz.png',
    '/images/categories/img-dich.png',
    '/images/categories/img-profile.png',
]

export default function ProductPageSection({
    product,
}: ProductPageSectionProps) {
    return (
        <section className='container mx-auto mt-8 px-4 md:px-6 lg:px-0'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mb-8'>
                <div className='md:col-span-1 flex flex-col'>
                    <div className='w-full'>
                        <ImageSlider
                            images={productImages}
                            altText='Aluminum rafters'
                        />
                    </div>
                </div>

                <div className=' sm:col-span-2 flex flex-col'>
                    <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-3'>
                        <h1 className='text-2xl lg:text-3xl font-semibold text-customGray-700'>
                            {product.title}
                        </h1>

                        <span className='inline-flex items-center bg-customGreen-50 border border-customGreen-200 text-customGreen-700 font-medium text-xs px-2 py-1 rounded-md md:ml-3 md:mt-0 md:h-auto max-w-max md:min-w-max'>
                            <CheckCircleIcon className='w-4 h-4 mr-1' />
                            auf Lager
                        </span>
                    </div>

                    <p className='text-sm text-customGray-500 mt-3'>
                        Art.Nr. A045
                    </p>

                    <div className='mt-8'>
                        <h3 className='text-base font-semibold text-customGray-700 mb-3'>
                            Main characteristics
                        </h3>
                        <div className='grid grid-cols-[100px_auto] gap-y-2 text-sm text-customGray-700'>
                            <span className='font-medium text-customGray-500'>
                                Kategorien:
                            </span>
                            <div className='text-customBlue-500 hover:underline cursor-pointer text-deepBlue'>
                                {product.category}
                            </div>
                            <span className='font-medium text-customGray-500'>
                                Länge:
                            </span>
                            <span className='font-medium text-customGray-700'>
                                600 cm
                            </span>
                            <span className='font-medium text-customGray-500'>
                                Farbe:
                            </span>
                            <span className='font-medium text-customGray-700'>
                                Anthrazit Struktur
                            </span>
                        </div>
                    </div>

                    <div className='mt-6 w-full flex items-center justify-between'>
                        <div className='flex items-center'>
                            <span className='text-2xl font-semibold text-customGray-700'>
                                {product.price} Lfd.m
                            </span>
                            <span className='ml-2 text-xs bg-iceBlue text-deepBlue px-2 py-1 rounded'>
                                excl. VAT
                            </span>
                        </div>
                        <div>
                            <CustomButton>Add to cart</CustomButton>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:col-span-3'>
                <ProductTabs
                    description={
                        <ProductDescriptionRenderer
                            content={product.descriptionTabs || []}
                        />
                    }
                    specification={
                        <ProductSpecificationRenderer
                            specifications={product.specification}
                        />
                    }
                    additionalInfo={
                        <ProductAdditionalInfoRenderer
                            additionalInfo={product.additionalInfo || []}
                        />
                    }
                />
            </div>
        </section>
    )
}
