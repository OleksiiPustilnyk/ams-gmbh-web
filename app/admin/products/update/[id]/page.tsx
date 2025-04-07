import UpdateProductView from '@/view/admin-panel/products/update-product'
import { testProducts } from '../../page'

interface UpdateProductPageProps {
    params: { id: string }
}

export default async function UpdateProductPage({
    params,
}: UpdateProductPageProps) {
    const { id } = params
    // to do fetch
    // const product = await fetchProductById(id)
    const product = testProducts[0]

    return <UpdateProductView product={product} />
}
