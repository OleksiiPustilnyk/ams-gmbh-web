'use client'

import { useState } from 'react'
import CartDetails from '@/components/cart/cart-details'
import { useCartStore } from '@/stores/use-cart-store'
import { ChevronIcon } from '@/components/ui/icons/icon-chevron'

export default function CartSection() {
    const [isOpen, setIsOpen] = useState(true)
    const items = useCartStore((s) => s.items)

    const total = items.reduce(
        (sum, item) => sum + parseFloat(item.product.price) * item.quantity,
        0,
    )

    return (
        <section className='container mx-auto'>
            <div className='bg-white border border-customGray-200 rounded-xl shadow-md p-6'>
                <div className='flex items-center justify-between mb-6'>
                    <h2 className='lg:text-xl font-semibold text-customGray-700'>
                        Order Details
                    </h2>

                    <button
                        type='button'
                        className='flex items-center gap-1 text-sm text-customGray-600 font-medium lg:hidden'
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <ChevronIcon
                            className={`w-4 h-4 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                            }`}
                        />
                    </button>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
                    <CartDetails />
                </div>

                <div className='mt-8 border-t pt-6 flex items-center justify-between lg:justify-end'>
                    <span className='text-sm lg:text-base text-customGray-500 font-medium mr-3'>
                        Total
                    </span>
                    <span className='text-xl lg:text-2xl font-semibold text-customGray-700'>
                        {total.toFixed(2).replace('.', ',')} €
                    </span>
                </div>
            </div>
        </section>
    )
}
