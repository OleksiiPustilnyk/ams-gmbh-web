import AdminBlogsView from '@/view/admin-panel/blogs'
import { Blog } from '@/view/admin-panel/blogs/blogs.types'
import AdminCategoriesView from '@/view/admin-panel/categories'
import { Category } from '@/view/admin-panel/categories/categories.types'

// my to delete
export const testCategories: Category[] = [
    {
        id: '001',
        name: 'Category 1',
        link: '/category_1',
        imageId: 'image_id_1',
    },
    {
        id: '002',
        name: 'Category 2',
        link: '/category_2',
        imageId: 'image_id_2',
    },
    {
        id: '003',
        name: 'Category 3',
        link: '/category_3',
        imageId: 'image_id_3',
    },
    {
        id: '004',
        name: 'Category 4',
        link: '/category_4',
        imageId: 'image_id_4',
    },
    {
        id: '005',
        name: 'Category 5',
        link: '/category_5',
        imageId: 'image_id_5',
    },
]

export default async function AdminCategoriesPage() {
    // to do fetch
    return <AdminCategoriesView categories={testCategories} />
}
