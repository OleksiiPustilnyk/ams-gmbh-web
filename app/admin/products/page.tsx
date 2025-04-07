import { testProducts } from '@/interfaces/test-product'
import AdminProductsView from '@/view/admin-panel/products'

export default async function AdminProductsPage() {
    // to do fetch
    return <AdminProductsView products={testProducts} />
}
