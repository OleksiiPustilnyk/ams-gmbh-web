import CatalogGrid from '@/components/product-catalog/catalog-grid'

export default function CatalogSection() {
    return (
        <section className='container mx-auto py-12 px-4 md:px-0'>
            <h2 className='text-[30px] font-semibold leading-[45px] tracking-normal text-primary mb-8'>
                Terrassenüberdachungen Alu Bausätze
            </h2>
            <CatalogGrid />
        </section>
    )
}
