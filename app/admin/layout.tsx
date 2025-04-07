import AdminHeader from '@/components/admin-panel/header/admin-header'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Admin Panel',
    description: 'Admin Panel for the aluminum patio and terrace application',
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='flex flex-col min-h-screen'>
            <AdminHeader />
            <main>{children}</main>
        </div>
    )
}
