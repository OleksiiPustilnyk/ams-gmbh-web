import AdminLoginView from '@/view/admin-panel/login'
import { redirect } from 'next/navigation'

export default async function AdminLoginPage() {
    const token = false // cookies().get('admin_token')?.value

    if (token) {
        redirect('/admin/products')
    }

    return (
        <div className='flex flex-col min-h-screen'>
            <AdminLoginView />
        </div>
    )
}
