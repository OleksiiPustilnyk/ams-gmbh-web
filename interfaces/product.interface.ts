export interface Product {
    title: string
    imageUrl: string
    altText: string
    price: string
    oldPrice?: string
    link: string
    description?: string
    category: string
    inStock?: boolean
    roofType?: string
    slug?: string
    descriptionTabs?: ProductContentBlock[]
    specification?: ProductSpecification[]
    additionalInfo?: ProductAdditionalInfo[]
}

export interface ProductSectionProps {
    title: string
    products: Product[]
}

export interface ProductContentBlock {
    type: 'heading' | 'text' | 'image' | 'list'
    content?: string
    src?: string
    items?: string[]
}

export interface ProductSpecification {
    key: string
    value: string
}

export interface ProductAdditionalInfo {
    key: string
    value: string
}
