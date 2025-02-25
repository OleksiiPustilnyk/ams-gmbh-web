import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
    title: string
    imageUrl: string
    altText: string
    link: string
}

export default function ProductCard({
    title,
    imageUrl,
    altText,
    link,
}: ProductCardProps) {
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

            <div className='w-full md:w-1/2 flex flex-col justify-center px-6 py-4 bg-lightGray'>
                <h3 className='text-[18px] font-semibold leading-[27px] tracking-normal text-primary'>
                    {title}
                </h3>
                <Link
                    href={link}
                    className='mt-2 text-[16px] font-normal leading-[24px] tracking-normal text-primary hover:underline flex items-center'
                >
                    Mehr
                    <Image
                        src='/images/icons/icon-diagonal-arrow.svg'
                        alt='Arrow'
                        width={10}
                        height={10}
                        className='ml-3'
                    />
                </Link>
            </div>
        </div>
    )
}
