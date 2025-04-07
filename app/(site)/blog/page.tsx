import { getPageTitle } from '@/helpers/get-page-title'
import BlogView from '@/view/blog'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: getPageTitle('/blog'),
    }
}

export default async function BlogPage() {
    return <BlogView />
}
