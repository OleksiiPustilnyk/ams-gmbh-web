import AdminLoginView from '@/view/admin-panel/login'
import { redirect } from 'next/navigation'

export default async function AdminLoginPage() {
    // my to do
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
