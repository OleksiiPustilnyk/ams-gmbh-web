import CategoryCard from '@/components/category-card/category-card'

const categories = [
    {
        category: 'Terrassenuberdachungen',
        title: 'Terrassenuberdachungen Bausatze',
        subtitle: 'Uberbachung Terrasse',
        imageUrl: '/images/product-section/img-alum-glass.png',
        link: '/profiles',
        buttonText: 'Jetzt einkaufen',
    },
    {
        category: 'Carport am Haus',
        title: 'Carport Bausatze',
        subtitle: 'Carport Modern',
        imageUrl: '/images/product-section/img-alum-glass-2.png',
        link: '/carport',
        buttonText: 'Jetzt einkaufen',
    },
]

export default function SecondCategorySection() {
    return (
        <section className='container mx-auto py-12 px-4 md:px-4 lg:px-0'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {categories.map((category, index) => (
                    <CategoryCard key={index} {...category} />
                ))}
            </div>
        </section>
    )
}
