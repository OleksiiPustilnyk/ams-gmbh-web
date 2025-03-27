'use client'

import { useCartStore } from '@/stores/use-cart-store'
import { CloseIcon } from '../ui/icons/icon-close'
import CustomButton from '../ui/buttons/custom-button'
import CartDetails from '../cart/cart-details'

export default function CartSidebar() {
    const isOpen = useCartStore((s) => s.isOpen)
    const items = useCartStore((s) => s.items)
    const closeCart = useCartStore((s) => s.closeCart)

    if (!isOpen) return null

    return (
        <div className='fixed inset-0 z-50 flex justify-end'>
            <div
                className='absolute inset-0 bg-darkBackground/70'
                onClick={closeCart}
            />

            <div className='relative h-full w-full max-w-md bg-white shadow-lg z-50 overflow-y-auto'>
                <div className='p-4 flex justify-between items-center'>
                    <h2 className='text-lg font-semibold'>Cart</h2>
                    <button onClick={closeCart} className='text-2xl font-light'>
                        <CloseIcon />
                    </button>
                </div>

                <CartDetails />

                {items.length > 0 && (
                    <div className='mt-6 bg-customYellow-50 border-t border-customYellow-200 px-6 py-4 flex items-center justify-between'>
                        <div>
                            <p className='text-sm text-customGray-500'>Total</p>
                            <p className='text-base font-semibold text-customGray-700'>
                                {items
                                    .reduce(
                                        (sum, item) =>
                                            sum +
                                            parseFloat(item.product.price) *
                                                item.quantity,
                                        0,
                                    )
                                    .toFixed(2)
                                    .replace('.', ',')}{' '}
                                €
                            </p>
                        </div>
                        <CustomButton
                            className='px-6 py-3'
                            bgColor='bg-customGray-700'
                        >
                            Zur Kasse
                        </CustomButton>
                    </div>
                )}
            </div>
        </div>
    )
}
