// to do: rewrite Blog

export interface Blog {
    id: string
    title: string
    body: string
    blogCategory: string
    imageIds: string[]
}

export interface AdminBlogsViewProps {
    blogs: Blog[]
}

export interface BlogTableProps {
    blogs: Blog[]
    updateLinkHref: string
    onDeleteBlog: (blogId: string) => void
}

export interface AddBlogInput {
    title: string
    body: string
    blogCategory: string
    images: File[]
}

export interface UpdateBlogInput extends Omit<AddBlogInput, 'images'> {
    id: string
    images?: File[]
}
