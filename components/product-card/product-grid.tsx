import { products } from '@/constants/products'
import ProductCard from './product-card'

export default function ProductGrid() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </div>
    )
}
