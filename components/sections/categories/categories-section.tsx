import CustomLink from '@/components/ui/link/custom-link'
import Image from 'next/image'

interface Category {
    title: string
    image: string
    link: string
}

const categories: Category[] = [
    {
        title: 'Alu Zaun',
        image: '/images/categories/img-zaun.png',
        link: '/category/alu-zaun',
    },
    {
        title: 'Aluminium Profile',
        image: '/images/categories/img-profile.png',
        link: '/category/aluminium-profile',
    },
    {
        title: 'Dichtungen',
        image: '/images/categories/img-dich.png',
        link: '/category/dichtungen',
    },
    {
        title: 'LED spots für Terrassenüberdachung',
        image: '/images/categories/img-led.png',
        link: '/category/led-spots',
    },
    {
        title: 'Terrassenüberdachung Bausatz',
        image: '/images/categories/img-bausatz.png',
        link: '/category/terrassen-bausatz',
    },
    {
        title: 'Zubehör',
        image: '/images/categories/img-zube.png',
        link: '/category/zubehor',
    },
]

export default function CategoriesSection() {
    return (
        <div className='container mx-auto py-10 px-4 lg:px-0'>
            <h2 className='text-2xl font-semibold text-customGray-700 mb-6 lg:text-5xl'>
                Kategorien
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className='flex items-center space-x-4 group'
                    >
                        <div className='lg:w-auto lg:h-auto w-28 h-28 flex-shrink-0'>
                            <Image
                                src={category.image}
                                alt={category.title}
                                width={200}
                                height={200}
                                className='object-cover w-full h-full transition-transform group-hover:scale-105'
                            />
                        </div>
                        <div>
                            <h3 className='lg:text-xl font-semibold text-customGray-700'>
                                {category.title}
                            </h3>
                            <CustomLink
                                className='mt-3 inline-block'
                                href={category.link}
                            >
                                Mehr
                            </CustomLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
