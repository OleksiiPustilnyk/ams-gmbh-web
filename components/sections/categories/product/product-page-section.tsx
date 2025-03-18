import { Product } from '@/interfaces/product.interface'

interface ProductPageSectionProps {
    product: Product
}

export default function ProductPageSection({
    product,
}: ProductPageSectionProps) {
    return <div>{product.title}</div>
}
