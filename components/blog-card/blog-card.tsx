import Image from 'next/image'
import CustomLink from '../ui/link/custom-link'
import { MarkerIcon } from '../ui/icons/icon-marker'
import { ClockIcon } from '../ui/icons/icon-clock'
import CustomSecondaryButton from '../ui/buttons/custom-secondary-button'
import { BlogArticle } from '@/interfaces/blog-article.interface'

interface BlogCardProps {
    article: BlogArticle
}

export default function BlogCard({
    article: { title, date, category, image, description, slug },
}: BlogCardProps) {
    return (
        <div className='overflow-hidden'>
            <h3 className='text-lg font-semibold text-customGray-700 mb-2'>
                {title}
            </h3>
            <div className='text-customGray-500 text-sm flex gap-3 mb-2 items-center'>
                <div className='flex items-center gap-2'>
                    <ClockIcon />
                    <p>{date}</p>
                </div>
                <CustomSecondaryButton
                    text={category}
                    icon={<MarkerIcon />}
                    iconPosition='left'
                />
            </div>
            <Image
                src={image}
                alt={title}
                width={400}
                height={250}
                className='w-full h-auto'
            />
            <p className='text-customGray-700 text-sm mt-2'>{description}</p>
            {slug && (
                <CustomLink
                    href={`/blog/${slug}`}
                    className='mt-3 inline-block'
                >
                    Auf Anfrage
                </CustomLink>
            )}
        </div>
    )
}
