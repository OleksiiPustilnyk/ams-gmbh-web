import Image from 'next/image'
import CustomLink from '@/components/ui/link/custom-link'

interface CatalogCardProps {
    title: string
    imageUrl: string
    altText: string
    link: string
}

export default function CatalogCard({
    title,
    imageUrl,
    altText,
    link,
}: CatalogCardProps) {
    return (
        <div className='bg-white overflow-hidden flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2'>
                <Image
                    src={imageUrl}
                    alt={altText}
                    width={400}
                    height={300}
                    className='object-cover w-full h-full'
                />
            </div>

            <div className='w-full md:w-1/2 flex flex-col justify-center px-6 py-4 bg-customGray-100'>
                <h3 className='text-lg font-semibold tracking-normal text-customGray-700'>
                    {title}
                </h3>

                <CustomLink href={link}>Mehr</CustomLink>
            </div>
        </div>
    )
}
