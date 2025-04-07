'use client'

import { LogoutIcon } from '@/components/ui/icons/icon-admin-logout'

export default function Logout() {
    const handleLogout = () => {
        // to do
        // localStorage.removeItem('token')

        window.location.href = '/'
    }

    return (
        <button
            className='p-2 hover:bg-gray-100 rounded-md transition'
            onClick={handleLogout}
        >
            <LogoutIcon className='w-6 h-6' />
        </button>
    )
}
