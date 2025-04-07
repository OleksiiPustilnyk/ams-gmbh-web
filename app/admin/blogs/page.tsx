import { testBlogs } from '@/interfaces/test-blog'
import AdminBlogsView from '@/view/admin-panel/blogs'

export default async function AdminBlogsPage() {
    // to do fetch
    return <AdminBlogsView blogs={testBlogs} />
}
