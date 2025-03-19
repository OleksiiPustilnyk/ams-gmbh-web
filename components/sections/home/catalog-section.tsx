import CatalogGrid from '@/components/product-catalog/catalog-grid'

export default function CatalogSection() {
    return (
        <section className='container mx-auto py-12 px-4 md:px-4 lg:px-0'>
            <h2 className='text-3xl font-semibold tracking-normal text-customGray-700 mb-8'>
                Terrassenüberdachungen Alu Bausätze
            </h2>
            <CatalogGrid />
        </section>
    )
}
