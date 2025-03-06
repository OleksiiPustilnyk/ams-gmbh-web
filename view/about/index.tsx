import AboutInfoSection from '@/components/sections/about/about-info-section'
import AboutSection from '@/components/sections/about/about-section'
import Breadcrumbs from '@/components/ui/bread-crumbs/bread-crumbs'

export default function AboutView() {
    return (
        <div className='w-full mx-auto pt-6 pb-10 px-0'>
            <Breadcrumbs />
            <AboutSection />
            <AboutInfoSection />
        </div>
    )
}
