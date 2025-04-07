'use client'

import Image from 'next/image'
import { useCartStore } from '@/stores/use-cart-store'
import CustomSecondaryButton from '../ui/buttons/custom-secondary-button'
import { TrashIcon } from '../ui/icons/icon-trash'

export default function CartDetails() {
    const items = useCartStore((s) => s.items)
    const updateQuantity = useCartStore((s) => s.updateQuantity)
    const removeItem = useCartStore((s) => s.removeItem)

    return (
        <div className='p-4 space-y-6'>
            {items.length === 0 ? (
                <p className='text-sm text-customGray-500'>
                    Warenkorb ist leer
                </p>
            ) : (
                items.map((item) => (
                    <div
                        key={item.product.slug}
                        className='flex gap-4 border-b pb-4 last:border-b-0'
                    >
                        <Image
                            src={item.product.imageUrl}
                            alt={item.product.altText}
                            width={80}
                            height={80}
                            className=' object-cover'
                        />
                        <div className='flex-1 flex flex-col justify-between'>
                            <div className='flex justify-between items-start'>
                                <p className='font-semibold text-sm text-customGray-700'>
                                    {item.product.title}
                                </p>
                                <button
                                    onClick={() =>
                                        removeItem(item.product.slug!)
                                    }
                                    className='p-1 hover:text-red-600 transition'
                                >
                                    <TrashIcon className='w-5 h-5' />
                                </button>
                            </div>

                            <div className='mt-2 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2'>
                                <div className='flex items-center gap-2 text-sm'>
                                    <CustomSecondaryButton
                                        text='-'
                                        textSize='text-xl'
                                        onClick={() => {
                                            const newQty = item.quantity - 1
                                            if (newQty < 1) {
                                                removeItem(item.product.slug!)
                                            } else {
                                                updateQuantity(
                                                    item.product.slug!,
                                                    newQty,
                                                )
                                            }
                                        }}
                                        className='w-9 h-8 flex justify-center items-center'
                                    />
                                    <span className='min-w-[24px] text-center'>
                                        {item.quantity}
                                    </span>
                                    <CustomSecondaryButton
                                        text='+'
                                        textSize='text-xl'
                                        onClick={() =>
                                            updateQuantity(
                                                item.product.slug!,
                                                item.quantity + 1,
                                            )
                                        }
                                        className='w-9 h-8 flex justify-center items-center'
                                    />
                                </div>

                                <div className='w-full flex justify-between lg:flex-row lg:items-center lg:gap-4 text-sm text-customGray-700'>
                                    <span>× {item.product.price} Stück</span>
                                    <span className='text-base font-semibold text-customGray-700'>
                                        {(
                                            parseFloat(item.product.price) *
                                            item.quantity
                                        )
                                            .toFixed(2)
                                            .replace('.', ',')}{' '}
                                        €
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}
