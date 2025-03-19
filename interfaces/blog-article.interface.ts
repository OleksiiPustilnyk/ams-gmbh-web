export interface BlogArticle {
    id: number
    title: string
    date: string
    category: string
    image: string
    description: string
    slug: string
    content?: BlogContentBlock[]
}

export interface BlogContentBlock {
    type: 'heading' | 'text' | 'image' | 'list'
    content?: string
    src?: string
    items?: string[]
}
