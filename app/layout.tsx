import Header from '@/components/header/header'
import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/footer/footer'

export const metadata: Metadata = {
    title: 'AMS GmbH – Aluminium Profile',
    description: 'Minimal Next.js App',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body>
                <div className='flex flex-col min-h-screen'>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
