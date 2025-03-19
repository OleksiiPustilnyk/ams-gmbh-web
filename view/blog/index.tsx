import BlogList from '@/components/sections/blog/blog-list-section'
import Breadcrumbs from '@/components/ui/bread-crumbs/bread-crumbs'

export default function BlogView() {
    return (
        <div className='w-full mx-auto pt-6 pb-10'>
            <div className='container mx-auto px-4 md:px-6 lg:px-0'>
                <Breadcrumbs />
            </div>
            <div className='container mx-auto py-8 px-4 lg:px-0'>
                <BlogList />
            </div>
        </div>
    )
}
