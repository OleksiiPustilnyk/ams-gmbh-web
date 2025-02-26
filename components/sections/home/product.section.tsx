import ProductGrid from '@/components/product-card/product-grid'
import Link from 'next/link'
import Image from 'next/image'

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
        <section className='container mx-auto py-12'>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-[30px] font-semibold leading-[45px] text-primary'>
                    {title}
                </h2>
                <Link
                    href='/shop'
                    className='text-[16px] text-primary hover:underline flex items-center'
                >
                    Alle ansehen
                    <Image
                        src='/images/icons/icon-diagonal-arrow.svg'
                        alt='Arrow'
                        width={10}
                        height={10}
                        className='ml-3'
                    />
                </Link>
            </div>

            <ProductGrid products={products} />
        </section>
    )
}
