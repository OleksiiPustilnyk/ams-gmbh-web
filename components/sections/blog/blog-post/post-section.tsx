import { BlogArticle } from '@/interfaces/blog-article.interface'
import Image from 'next/image'
import BlogContentRenderer from './post-content-render-section'
import { ClockIcon } from '@/components/ui/icons/icon-clock'
import CustomSecondaryButton from '@/components/ui/buttons/custom-secondary-button'
import { MarkerIcon } from '@/components/ui/icons/icon-marker'

interface PostSectionProps {
    post: BlogArticle
}

export default function PostSection({ post }: PostSectionProps) {
    return (
        <>
            <h1 className='text-3xl font-semibold text-customGray-700 mb-4'>
                {post.title}
            </h1>
            <div className='text-customGray-500 text-sm flex gap-3 mb-2 items-center'>
                <div className='flex items-center gap-2'>
                    <ClockIcon />
                    <p>{post.date}</p>
                </div>
                <CustomSecondaryButton
                    text={post.category}
                    icon={<MarkerIcon />}
                    iconPosition='left'
                />
            </div>
            <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={450}
                className='w-full h-auto my-6'
            />
            <BlogContentRenderer content={post.content || []} />
        </>
    )
}
