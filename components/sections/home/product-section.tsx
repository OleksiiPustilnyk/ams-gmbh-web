import ProductGrid from '@/components/product-card/product-grid'
import CustomLink from '@/components/ui/link/custom-link'

interface ProductSectionProps {
    title: string
    products: {
        title: string
        imageUrl: string
        altText: string
        price: string
        oldPrice?: string
        link: string
    }[]
}

export default function ProductSection({
    title,
    products,
}: ProductSectionProps) {
    return (
        <section className='container mx-auto py-12 px-4 md:px-4 lg:px-0'>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-[30px] font-semibold leading-[45px] text-primary'>
                    {title}
                </h2>

                <CustomLink href='/shop'>Alle ansehen</CustomLink>
            </div>

            <ProductGrid products={products} />
        </section>
    )
}
