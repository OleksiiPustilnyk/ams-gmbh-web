// import NotFoundView from '@/view/not-found'

// export default async function NotFoundPage() {
//     return <NotFoundView />
// }

import NotFoundView from '@/view/not-found'
import MainLayout from './(site)/layout'

export default async function NotFoundPage() {
    return (
        <MainLayout>
            <NotFoundView />
        </MainLayout>
    )
}
