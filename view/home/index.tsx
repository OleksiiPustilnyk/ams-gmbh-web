import HeroSection from '@/components/sections/home/hero-section'
import ProductsSection from '@/components/sections/home/products-section'

export default function HomeView() {
    return (
        <main className='w-full'>
            <HeroSection />
            <ProductsSection />
        </main>
    )
}
