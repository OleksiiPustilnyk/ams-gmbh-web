import type { Metadata } from 'next'
import './globals.css'

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
            <body>{children}</body>
        </html>
    )
}
