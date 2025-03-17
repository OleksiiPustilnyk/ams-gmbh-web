import CategoryCard from '@/components/category-card/category-card'
import { secondCategoryList } from '@/constants/categories-data'

export default function SecondCategorySection() {
    return (
        <section className='container mx-auto py-12 px-4 md:px-4 lg:px-0'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {secondCategoryList.map((category, index) => (
                    <CategoryCard key={index} {...category} />
                ))}
            </div>
        </section>
    )
}
