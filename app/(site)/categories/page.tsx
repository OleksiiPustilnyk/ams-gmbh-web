import { getPageTitle } from '@/helpers/get-page-title'
import CategoriesView from '@/view/categories'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: getPageTitle('/categories'),
    }
}

export default async function CategoriesPage() {
    return <CategoriesView />
}
