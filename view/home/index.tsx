import HeroSection from '@/components/sections/home/hero-section'
import CatalogSection from '@/components/sections/home/catalog-section'
import ProductSection from '@/components/sections/home/product-section'
import FirstCategorySection from '@/components/sections/home/first-category-section'
import SecondCategorySection from '@/components/sections/home/second-category-section'
import LEDSection from '@/components/sections/home/led-product-section'
import FeatureSection from '@/components/sections/home/feature-section'
import CategorySectionWithBg from '@/components/sections/home/category-card-section'
import BenefitsSection from '@/components/sections/home/benefits-item-section'

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
            <FirstCategorySection />
            <ProductSection
                title='Zubehör und Dichtungen'
                products={products}
            />
            <SecondCategorySection />
            <LEDSection />
            <FeatureSection />
            <ProductSection title='Zaun Aluminium' products={products} />
            <CategorySectionWithBg />
            <ProductSection title='Aluminium Products' products={products} />
            <BenefitsSection />
        </main>
    )
}
