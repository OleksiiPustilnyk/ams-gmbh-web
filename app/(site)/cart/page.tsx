import { getPageTitle } from '@/helpers/get-page-title'
import CartView from '@/view/cart'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: getPageTitle('/cart'),
    }
}

export default async function CartPage() {
    return <CartView />
}
