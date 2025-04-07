'use client'

import LoginForm from '@/components/admin-panel/forms/login-form'

export default function AdminLoginView() {
    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <h1 className='text-2xl font-bold mb-6'>Administrator Login</h1>
            <LoginForm />
        </div>
    )
}
