import CheckoutForm from '@/components/forms/checkout-form'
import CartSection from '@/components/sections/cart/cart-section'
import Breadcrumbs from '@/components/ui/bread-crumbs/bread-crumbs'

export default function CartView() {
    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <Breadcrumbs />
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold text-customGray-700 mt-8'>
                Warenkorb
            </h1>
            <div className='w-full container mx-auto py-12 flex flex-col lg:flex-row items-start gap-8'>
                <div className='w-full lg:w-1/2'>
                    <CartSection />
                </div>

                <div className='w-full lg:w-1/2 flex justify-center'>
                    <CheckoutForm />
                </div>
            </div>
        </div>
    )
}
