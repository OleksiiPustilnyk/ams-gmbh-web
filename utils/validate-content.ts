import { BlogContentBlock } from '@/interfaces/blog-article.interface'

export function validateContent(content: unknown): BlogContentBlock[] {
    if (!Array.isArray(content)) return []

    return content.map((block) => {
        const validType = ['heading', 'text', 'list', 'image'].includes(
            block.type,
        )
            ? (block.type as 'heading' | 'text' | 'list' | 'image')
            : 'text'

        return {
            type: validType,
            content: typeof block.content === 'string' ? block.content : '',
            src: typeof block.src === 'string' ? block.src : undefined,
            items: Array.isArray(block.items) ? block.items : undefined,
        }
    })
}
