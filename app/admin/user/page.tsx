import AdminBlogsView from '@/view/admin-panel/blogs'
import { Blog } from '@/view/admin-panel/blogs/blogs.types'
import AdminProductsView from '@/view/admin-panel/products'
import AdminUserView from '@/view/admin-panel/user'
import { UserResponse } from '@/view/admin-panel/user/user.types'

// my to delete
export const testUser: UserResponse = {
    id: '001',
    email: 'admin@test.com',
    username: 'TestAdmin Name',
}

export default async function AdminUserPage() {
    // to do fetch
    return <AdminUserView user={testUser} />
}
