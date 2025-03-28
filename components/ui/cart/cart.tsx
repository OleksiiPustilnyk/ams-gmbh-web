'use client'

import { useCartStore } from '@/stores/use-cart-store'
import { CartIcon } from '../icons/icon-cart'

export default function Cart() {
    const toggleCart = useCartStore((s) => s.toggleCart)
    const itemCount = useCartStore((s) =>
        s.items.reduce((acc, item) => acc + item.quantity, 0),
    )

    return (
        <div className='relative'>
            <button
                onClick={toggleCart}
                className='p-2 hover:bg-customGray-100 rounded-md transition'
            >
                <CartIcon />
            </button>

            {itemCount > 0 && (
                <span className='absolute -top-0 right-1 flex items-center justify-center bg-customGray-800 text-white text-[10px] leading-4 font-medium rounded-full w-4 h-4 border-2 border-white'>
                    {itemCount}
                </span>
            )}
        </div>
    )
}
