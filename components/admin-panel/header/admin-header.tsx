import Logo from '@/components/logo/logo'
import AdminNavMenu from '../nav-menu/admin-nav-menu'
import Logout from '../logout/logout'
import Link from 'next/link'
import { UserIcon } from '@/components/ui/icons/icon-admin-user'

export default function AdminHeader() {
    return (
        // <div className='z-[9999]'>

        <header className='w-full bg-white shadow-md'>
            <div className='container mx-auto flex items-center justify-between py-4'>
                <div className='flex items-center gap-4 '>
                    <Logo />
                </div>
                <nav className='flex flex-1 justify-center'>
                    <AdminNavMenu />
                </nav>
                <div className='flex items-center gap-2'>
                    <Link
                        href={'/admin/user'}
                        className='p-2 hover:bg-gray-100 rounded-md transition'
                    >
                        <UserIcon className='w-6 h-6' />
                    </Link>
                    <Logout />
                </div>
            </div>
        </header>
        // </div>
    )
}
