import { Product } from '@/interfaces/product.interface'
import ProductCard from './product-card'

interface ProductGridProps {
    products: Product[]
    columns?: 3 | 4
}

export default function ProductGrid({
    products,
    columns = 4,
}: ProductGridProps) {
    return (
        <div
            className={`grid gap-6 ${
                columns === 3
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            }`}
        >
            {products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </div>
    )
}
