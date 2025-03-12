import Image from 'next/image'
import CustomLink from '@/components/ui/link/custom-link'

interface CategoryCardProps {
    category: string
    title: string
    subtitle: string
    imageUrl: string
    link: string
    buttonText?: string
}

export default function CategoryCard({
    category,
    title,
    subtitle,
    imageUrl,
    link,
    buttonText = 'Mehr',
}: CategoryCardProps) {
    return (
        <div className='relative bg-white border p-8 py-20 flex overflow-hidden min-h-[230px]'>
            <div className='flex-1 z-10 flex flex-col justify-center'>
                <span className='text-customGray-700 text-base font-normal'>
                    {category}
                </span>
                <h3 className='text-3xl leading-10 font-semibold text-customGray-700 mt-1'>
                    {title}
                </h3>
                <p className='text-customGray-500 text-sm font-normal'>
                    {subtitle}
                </p>

                <CustomLink href={link} className='mt-10'>
                    {buttonText}
                </CustomLink>
            </div>

            <div className='absolute right-0 bottom-0 w-[70%] h-[100%] flex items-end'>
                <Image
                    src={imageUrl}
                    alt={title}
                    layout='fill'
                    objectFit='contain'
                    objectPosition='bottom right'
                />
            </div>
        </div>
    )
}
