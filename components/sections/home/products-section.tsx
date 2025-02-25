import ProductGrid from '@/components/product-card/product-grid'

export default function ProductsSection() {
    return (
        <section className='container mx-auto py-12'>
            <h2 className='text-[30px] font-semibold leading-[45px] tracking-normal text-primary mb-8'>
                Terrassenüberdachungen Alu Bausätze
            </h2>
            <ProductGrid />
        </section>
    )
}
