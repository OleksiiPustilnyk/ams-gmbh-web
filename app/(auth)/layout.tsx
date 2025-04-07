import Logo from '@/components/logo/logo'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Admin Panel',
    description: 'Admin Panel for the aluminum patio and terrace application',
}

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className='w-full bg-white shadow-md'>
                <div className='container mx-auto flex items-center justify-between py-4'>
                    <div className='flex items-center gap-4'>
                        <Logo />
                    </div>
                </div>
            </header>
            <main>{children}</main>
        </div>
    )
}
