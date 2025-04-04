// to do: rewrite Product

import { TerraceConfig } from '../terrace-config/terrace-config.types'

export interface Product {
    id: string
    name: string
    articleNumber: string
    price: number
    discountPrice?: number
    isInStock?: boolean
    measurementUnit: MeasurementUnitEnum
    categoryIds: string[]
    length?: string
    paint?: string
    description?: string
    additionalInfo?: string
    isPopular?: boolean
    relatedProducts?: string[]
    imageIds: string[]
}

export interface ProductTableProps {
    products: Product[] | TerraceConfig[]
    updateLinkHref: string
    onDeleteProduct: (productId: string) => void
}

export interface AdminProductsViewProps {
    products: Product[]
}

export interface AddProductFormProps {
    products: Product[]
}

export interface AddProductInput {
    name: string
    articleNumber: string
    price: number
    discountPrice?: number
    isInStock?: boolean
    measurementUnit: MeasurementUnitEnum
    categoryIds: string[]
    length?: string
    paint?: string
    description?: string
    additionalInfo?: string
    isPopular?: boolean
    relatedProducts?: string[]
    images: File[]
}

export interface UpdateProductInput extends Omit<AddProductInput, 'images'> {
    id: string
    images?: File[]
}

export enum MeasurementUnitEnum {
    LINEAR_METER = 'linear_meter',
    PIECE = 'piece',
    SET = 'set',
    SIX_SET = 'six_set',
    TWELVE_SET = 'twelve_set',
    SQUARE_METER = 'square_meter',
}
