import Header from '@/components/header/header'
import type { Metadata } from 'next'
import Footer from '@/components/footer/footer'

export const metadata: Metadata = {
    title: 'Hello World',
    description: 'Minimal Next.js App',
}

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
