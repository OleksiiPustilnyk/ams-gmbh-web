import CustomLink from '@/components/ui/link/custom-link'
import { pageCategories } from '@/constants/categories-data'
import Image from 'next/image'

export default function CategoriesSection() {
    return (
        <div className='container mx-auto py-10 px-4 lg:px-0'>
            <h2 className='text-2xl font-semibold text-customGray-700 mb-6 lg:text-5xl'>
                Kategorien
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                {pageCategories.map((category, index) => (
                    <div
                        key={index}
                        className='flex items-center space-x-4 group'
                    >
                        <div className='lg:w-52 lg:h-52 w-28 h-28 flex-shrink-0'>
                            <Image
                                src={category.imageUrl}
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
                            {category.slug && (
                                <CustomLink
                                    href={`/categories/${category.slug}`}
                                    className='mt-3 inline-block'
                                >
                                    Mehr
                                </CustomLink>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
