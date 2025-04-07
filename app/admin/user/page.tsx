import { testUser } from '@/interfaces/test-user'
import AdminUserView from '@/view/admin-panel/user'

export default async function AdminUserPage() {
    // to do fetch
    return <AdminUserView user={testUser} />
}
