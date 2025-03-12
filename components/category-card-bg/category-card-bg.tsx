import Image from 'next/image'
import CustomLink from '@/components/ui/link/custom-link'

interface CategoryCardProps {
    title: string
    imageUrl: string
    link: string
}

export default function CategoryCardWithBg({
    title,
    imageUrl,
    link,
}: CategoryCardProps) {
    return (
        <div className='bg-customGray-100 '>
            <div className='flex justify-between items-start mb-16 pt-6 px-6'>
                <h3 className='text-xl font-semibold text-customGray-700'>
                    {title}
                </h3>
                <CustomLink href={link} textSize='text-sm'>
                    More
                </CustomLink>
            </div>
            <div className='mt-4'>
                <Image
                    src={imageUrl}
                    alt={title}
                    width={200}
                    height={150}
                    className='w-full h-auto object-contain'
                />
            </div>
        </div>
    )
}
