import CategoryCard from '@/components/category-card/category-card'
import { firstCategoryList } from '@/constants/categories-data'
import Image from 'next/image'

export default function FirstCategorySection() {
    return (
        <section className='container mx-auto py-12 px-4 md:px-4 lg:px-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 '>
                {firstCategoryList.map((category, index) => (
                    <CategoryCard key={index} {...category} />
                ))}

                <div className='bg-customGray-100 border p-6 flex items-center justify-between'>
                    <div className='w-2/3 pr-6'>
                        <p className='text-customGray-500 text-sm'>
                            Zertifizierungen und Qualität: Nachweise unseres
                            Engagements für Exzellenz im deutschen
                            Aluminiumhandel
                        </p>
                    </div>

                    <div className='w-1/3 flex justify-end items-center gap-4'>
                        <Image
                            src='/images/certificats/img-iso.png'
                            alt='ISO Zertifizierung'
                            width={88}
                            height={88}
                            className='object-contain'
                        />
                        <Image
                            src='/images/certificats/img-ce.png'
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
