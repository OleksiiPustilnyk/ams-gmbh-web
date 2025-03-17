import AboutContactSection from '@/components/sections/about/about-contact-section'
import AboutInfoSection from '@/components/sections/about/about-info-section'
import AboutSection from '@/components/sections/about/about-section'
import AboutServicesSection from '@/components/sections/about/about-services-section'
import ProductSection from '@/components/sections/home/product-section'
import Breadcrumbs from '@/components/ui/bread-crumbs/bread-crumbs'
import { products } from '@/constants/products'

export default function AboutView() {
    return (
        <div className='w-full mx-auto pt-6 pb-10'>
            <div className='container mx-auto px-4 md:px-6 lg:px-0'>
                <Breadcrumbs />
            </div>
            <AboutSection />
            <AboutInfoSection />
            <AboutServicesSection />
            <AboutContactSection />
            <ProductSection title='Produkte' products={products} />
        </div>
    )
}
