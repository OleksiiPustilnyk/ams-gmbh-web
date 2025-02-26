import HeroSection from '@/components/sections/home/hero-section'
import CatalogSection from '@/components/sections/home/catalog-section'
import ProductSection from '@/components/sections/home/product.section'

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

export default function HomeView() {
    return (
        <main className='w-full'>
            <HeroSection />
            <CatalogSection />
            <ProductSection title='Aluminium Produkte' products={products} />
        </main>
    )
}
