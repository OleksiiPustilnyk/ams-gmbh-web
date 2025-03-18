import { Product } from './product.interface'

export interface CategoryArticle {
    category?: string
    title: string
    subtitle?: string
    imageUrl: string
    link: string
    buttonText?: string
    slug?: string
    product?: Product[]
}
