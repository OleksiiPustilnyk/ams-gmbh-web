import ProductCard from './product-card'

interface ProductGridProps {
    products: {
        title: string
        imageUrl: string
        altText: string
        price: string
        oldPrice?: string
        link: string
    }[]
}

export default function ProductGrid({ products }: ProductGridProps) {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </div>
    )
}
