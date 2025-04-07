import { testProducts } from '@/interfaces/test-product'
import UpdateProductView from '@/view/admin-panel/products/update-product'

// interface UpdateProductPageProps {
//     params: { id: string }
// }

export default async function UpdateProductPage() {
    // const { id } = params
    // to do fetch
    // const product = await fetchProductById(id)
    const product = testProducts[0]

    return <UpdateProductView product={product} />
}
