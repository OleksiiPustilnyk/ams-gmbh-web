import { getPageTitle } from '@/helpers/get-page-title'
import ContactView from '@/view/contact'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: getPageTitle('/contact'),
    }
}

export default async function ContactPage() {
    return <ContactView />
}
