import { products } from '@/constants/products'
import CatalogCard from './catalog-card'

export default function CatalogGrid() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {products.map((product, index) => (
                <CatalogCard key={index} {...product} />
            ))}
        </div>
    )
}
