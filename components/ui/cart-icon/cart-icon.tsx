import { CartIcon } from '../icons/icon-cart'

export default function Cart() {
    const cartCount = 1

    return (
        <div className='relative'>
            <button className='p-2 hover:bg-gray-100 rounded-md transition'>
                <CartIcon />
            </button>
            {cartCount > 0 && (
                <span className='absolute -top-0 right-1 flex items-center justify-center bg-secondary text-white text-[10px] leading-[1rem] font-medium rounded-full w-4 h-4 border-2 border-white'>
                    {cartCount}
                </span>
            )}
        </div>
    )
}
