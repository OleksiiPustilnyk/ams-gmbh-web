import AdminProductsView from '@/view/admin-panel/products'

export const productsMock = [
    {
        id: '1',
        name: 'Product 1',
        articleNumber: 'A046',
        price: '100 €',
    },
    {
        id: '2',
        name: 'Product 2',
        articleNumber: 'A046',
        price: '150 €',
    },
    {
        id: '3',
        name: 'Product 3',
        articleNumber: 'A046',
        price: '200 €',
    },
    {
        id: '4',
        name: 'Product 4',
        articleNumber: 'A046',
        price: '250 €',
    },
]

export default async function AdminProductsPage() {
    // to do fetch
    return <AdminProductsView products={productsMock} />
}
