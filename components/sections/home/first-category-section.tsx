import CategoryCard from '@/components/category-card/category-card'
import Image from 'next/image'

const categories = [
    {
        category: 'Aluminum',
        title: 'Profiles',
        subtitle: 'Terrassenuberdachungen',
        imageUrl: '/images/product-section/img-alum.png',
        link: '/terrassen',
        buttonText: 'Mehr',
    },
    {
        category: 'Aluminum',
        title: 'Carport',
        subtitle: 'Carports',
        imageUrl: '/images/product-section/img-alum.png',
        link: '/carport-modern',
        buttonText: 'Mehr',
    },
    {
        category: 'Aluminum',
        title: 'Zubehor',
        subtitle: 'Zubehor',
        imageUrl: '/images/product-section/img-alum.png',
        link: '/zubehor',
        buttonText: 'Mehr',
    },
]

export default function FirstCategorySection() {
    return (
        <section className='container mx-auto py-12 px-4 md:px-4 lg:px-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 '>
                {categories.map((category, index) => (
                    <CategoryCard key={index} {...category} />
                ))}

                <div className='bg-lightGray border p-6 flex items-center justify-between'>
                    <div className='w-2/3 pr-6'>
                        <p className='text-gray-500 text-[14px] leading-[21px]'>
                            Zertifizierungen und Qualität: Nachweise unseres
                            Engagements für Exzellenz im deutschen
                            Aluminiumhandel
                        </p>
                    </div>

                    <div className='w-1/3 flex justify-end items-center gap-4'>
                        <Image
                            src='/images/img-iso.png'
                            alt='ISO Zertifizierung'
                            width={88}
                            height={88}
                            className='object-contain'
                        />
                        <Image
                            src='/images/img-ce.png'
                            alt='CE Zertifizierung'
                            width={88}
                            height={88}
                            className='object-contain'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
