import CategoryCardWithBg from '@/components/category-card-bg/category-card-bg'

const categories = [
    {
        title: 'Aluminum Profiles',
        imageUrl: '/images/product-section/img-alum-profile.png',
        link: '/profiles',
    },
    {
        title: 'Zubehör',
        imageUrl: '/images/product-section/img-accessories.png',
        link: '/zubehor',
    },
    {
        title: 'Dichtungen',
        imageUrl: '/images/product-section/img-seals.png',
        link: '/dichtungen',
    },
]

export default function CategorySectionWithBg() {
    return (
        <section className='container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
            {categories.map((category, index) => (
                <CategoryCardWithBg key={index} {...category} />
            ))}
        </section>
    )
}
