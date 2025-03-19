// import AdminHeader from '@/components/adminHeader'
// import AdminFooter from '@/components/adminFooter'
import AdminHeader from '@/components/admin-panel/header/adminHeader'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Admin Panel',
    description: 'Admin Panel for the aluminum patio, terrace application',
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // return (
    //     <html lang='en'>
    //         <body>
    //             <div className='flex flex-col min-h-screen'>
    //                 {/* <AdminHeader /> */}
    //                 <main>{children}</main>
    //                 {/* <AdminFooter />  */}
    //             </div>
    //         </body>
    //     </html>
    // )
    return (
        <div className='flex flex-col min-h-screen'>
            <AdminHeader />
            <main>{children}</main>
            {/* <AdminFooter />  */}
        </div>
    )
}
