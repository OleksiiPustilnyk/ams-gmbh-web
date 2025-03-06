import AboutUsSection from '@/components/sections/about/about-section'
import Breadcrumbs from '@/components/ui/bread-crumbs/bread-crumbs'

export default function AboutView() {
    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <Breadcrumbs />
            <AboutUsSection />
        </div>
    )
}
