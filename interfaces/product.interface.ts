export interface Product {
    title: string
    imageUrl: string
    altText: string
    price: string
    oldPrice?: string
    link: string
    description?: string
}

export interface ProductSectionProps {
    title: string
    products: Product[]
}
