import AboutInfoSection from '@/components/sections/about/about-info-section'
import AboutSection from '@/components/sections/about/about-section'
import AboutServicesSection from '@/components/sections/about/about-services-section'
import ProductSection from '@/components/sections/home/product-section'
import Breadcrumbs from '@/components/ui/bread-crumbs/bread-crumbs'

const products = [
    {
        title: 'Aluminum rafters for patio roofing or patio roofing',
        imageUrl: '/images/product-section/img-product-alum.png',
        altText: 'Aluminum rafters',
        price: '25.95€',
        link: '/product/aluminum1',
    },
    {
        title: 'Aluminum rafters for patio roofing',
        imageUrl: '/images/product-section/img-product-alum.png',
        altText: 'Aluminum rafters',
        price: '6.50€',
        oldPrice: '7.50€',
        link: '/product/aluminum2',
    },
    {
        title: 'Aluminum rafters for patio roofing or patio roofing',
        imageUrl: '/images/product-section/img-product-alum.png',
        altText: 'Aluminum rafters',
        price: '25.95€',
        link: '/product/aluminum3',
    },
    {
        title: 'Aluminum rafters for patio roofing or patio roofing',
        imageUrl: '/images/product-section/img-product-alum.png',
        altText: 'Aluminum rafters',
        price: '25.95€',
        link: '/product/aluminum4',
    },
]

export default function AboutView() {
    return (
        <div className='w-full mx-auto pt-6 pb-10 px-0'>
            <Breadcrumbs />
            <AboutSection />
            <AboutInfoSection />
            <AboutServicesSection />
            <ProductSection title='Produkte' products={products} />
        </div>
    )
}
