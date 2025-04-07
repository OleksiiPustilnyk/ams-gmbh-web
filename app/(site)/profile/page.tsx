import { getPageTitle } from '@/helpers/get-page-title'
import ProfileView from '@/view/profile'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: getPageTitle('/profile'),
    }
}

export default async function ProfilePage() {
    return <ProfileView />
}
