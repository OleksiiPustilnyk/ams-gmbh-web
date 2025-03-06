import CatalogIntroSection from '@/components/sections/catalog/catalog-info-section'
import CatalogProductSection from '@/components/sections/catalog/catalog-product-section'
import Breadcrumbs from '@/components/ui/bread-crumbs/bread-crumbs'

export default function CatalogView() {
    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <Breadcrumbs />
            <CatalogIntroSection />
            <CatalogProductSection />
        </div>
    )
}
