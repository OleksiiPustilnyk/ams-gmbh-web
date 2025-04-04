import { testBlogs } from '../../page'
import UpdateBlogView from '@/view/admin-panel/blogs/update-blog'

interface UpdateBlogPageProps {
    params: { id: string }
}

export default async function UpdateBlogPage({ params }: UpdateBlogPageProps) {
    const { id } = params
    // to do fetch
    // const blog = await fetchBlogById(id)
    const blog = testBlogs[0]

    return <UpdateBlogView blog={blog} />
}
