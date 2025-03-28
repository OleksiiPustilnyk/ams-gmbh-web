import Image from 'next/image'
import CustomButton from '@/components/ui/buttons/custom-button'
import CustomLink from '@/components/ui/link/custom-link'

interface Product {
    id: number
    imageUrl: string
    title: string
    subtitle: string
    setInfo: string
    price: string
    link: string
}

interface ProductSectionProps {
    sectionTitle: string
    viewAllLink: string
    products: Product[]
}

export default function ProductCardWithButton({
    sectionTitle,
    viewAllLink,
    products,
}: ProductSectionProps) {
    return (
        <section className='container mx-auto py-12 px-4 md:px-4 lg:px-0'>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-3xl font-semibold text-customGray-700'>
                    {sectionTitle}
                </h2>
                <CustomLink href={viewAllLink}>Alle ansehen</CustomLink>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {products.map((product) => (
                    <div
                        key={product.id}
                        className='flex items-center gap-3 p-4'
                    >
                        <div className='w-[35%] flex-shrink-0'>
                            <Image
                                src={product.imageUrl}
                                alt={product.title}
                                width={220}
                                height={180}
                                className='object-contain'
                            />
                        </div>

                        <div className='w-[65%]'>
                            <h3 className='text-base font-semibold text-customGray-700'>
                                {product.title}
                            </h3>

                            <div className='flex justify-between items-center mt-10'>
                                <div className='flex flex-col'>
                                    <span className='text-customGray-500 text-sm'>
                                        {product.setInfo}
                                    </span>
                                    <span className='text-lg font-semibold text-customGray-700'>
                                        {product.price}
                                    </span>
                                </div>
                                <CustomButton>Add to cart</CustomButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
