import { getPageTitle } from '@/helpers/get-page-title'
import AboutView from '@/view/about'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: getPageTitle('/about'),
    }
}

export default async function AboutPage() {
    return <AboutView />
}
