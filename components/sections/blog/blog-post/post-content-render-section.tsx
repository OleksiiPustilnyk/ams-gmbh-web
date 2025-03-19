import Image from 'next/image'

interface BlogContentBlock {
    type: 'heading' | 'text' | 'image' | 'list'
    content?: string
    src?: string
    items?: string[]
}

interface BlogContentRendererProps {
    content: BlogContentBlock[]
}

export default function BlogContentRenderer({
    content = [],
}: BlogContentRendererProps) {
    return (
        <div className='space-y-4'>
            {content.map((block, index) => {
                if (block.type === 'heading') {
                    return (
                        <h2
                            key={index}
                            className='text-lg font-semibold text-customGray-700'
                        >
                            {block.content}
                        </h2>
                    )
                }
                if (block.type === 'text') {
                    return (
                        <p
                            key={index}
                            className='text-base font-normal text-customGray-700'
                        >
                            {block.content}
                        </p>
                    )
                }
                if (block.type === 'image') {
                    return (
                        <Image
                            key={index}
                            src={block.src!}
                            alt='img-post'
                            width={800}
                            height={450}
                            className='w-full h-auto my-6'
                        />
                    )
                }
                if (block.type === 'list' && block.items) {
                    return (
                        <ul key={index} className='space-y-2'>
                            {block.items.map((item, i) => (
                                <li key={i} className='flex items-center gap-3'>
                                    <span className='w-2 h-2 flex-shrink-0 self-center rounded-full bg-customYellow-600'></span>
                                    <span className='text-base font-normal text-customGray-700 leading-relaxed'>
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )
                }
                return null
            })}
        </div>
    )
}
