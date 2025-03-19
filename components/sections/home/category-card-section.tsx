import CategoryCardWithBg from '@/components/category-card-bg/category-card-bg'
import { thirdCategoryList } from '@/constants/categories-data'

export default function CategorySectionWithBg() {
    return (
        <section className='container mx-auto py-12 px-4 sm:px-4 grid grid-cols-1 md:grid-cols-3 gap-6'>
            {thirdCategoryList.map((category, index) => (
                <CategoryCardWithBg key={index} {...category} />
            ))}
        </section>
    )
}
