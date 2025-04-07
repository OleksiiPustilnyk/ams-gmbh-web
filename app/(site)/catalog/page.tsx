import { getPageTitle } from '@/helpers/get-page-title'
import CatalogView from '@/view/catalog'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: getPageTitle('/catalog'),
    }
}

export default async function CatalogPage() {
    return <CatalogView />
}
