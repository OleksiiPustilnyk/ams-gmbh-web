import Image from 'next/image'

export default function Cart() {
    const cartCount = 1

    return (
        <div className='relative'>
            <button className='p-2 hover:bg-gray-100 rounded-md transition'>
                <Image
                    src='/images/icons/icon-cart.svg'
                    alt='Cart'
                    width={20}
                    height={20}
                />
            </button>
            {cartCount > 0 && (
                <span className='absolute -top-0 right-1 flex items-center justify-center bg-secondary text-white text-[10px] font-medium rounded-full w-4 h-4 border-2 border-white leading-[1rem]'>
                    {cartCount}
                </span>
            )}
        </div>
    )
}
