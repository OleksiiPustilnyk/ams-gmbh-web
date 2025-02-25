import HeroSection from '@/components/sections/home/hero-section'
import CatalogSection from '@/components/sections/home/catalog-section'

export default function HomeView() {
    return (
        <main className='w-full'>
            <HeroSection />
            <CatalogSection />
        </main>
    )
}
