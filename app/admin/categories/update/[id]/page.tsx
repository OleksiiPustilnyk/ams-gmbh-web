import UpdateCategoryView from '@/view/admin-panel/categories/update-category'
import { testCategories } from '../../page'

// interface UpdateCategoryPageProps {
//     params: { id: string }
// }

export default async function UpdateCategoryPage() {
    // const { id } = params
    // to do fetch
    // const category = await fetchCategoryById(id)
    const category = testCategories[0]

    return <UpdateCategoryView category={category} />
}
