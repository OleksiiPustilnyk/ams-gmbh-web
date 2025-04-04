import { redirect } from 'next/navigation'

export default function AdminPage() {
    // to do
    // const token = cookies().get('admin_token')?.value

    // to delete
    const token = true

    if (!token) {
        redirect('/login')
    } else {
        redirect('/admin/products')
    }
}
