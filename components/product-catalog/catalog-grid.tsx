import { catalog } from '@/constants/catalog'
import CatalogCard from './catalog-card'

export default function CatalogGrid() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {catalog.map((product, index) => (
                <CatalogCard key={index} {...product} />
            ))}
        </div>
    )
}
