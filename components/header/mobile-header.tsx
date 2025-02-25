'use client'

import { useState } from 'react'
import Logo from '../logo/logo'
import MobileMenu from '../nav-menu/mobile-menu'
import Cart from '../ui/cart-icon/cart-icon'
import Image from 'next/image'

export default function MobileHeader() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className='md:hidden w-full border-b bg-white shadow-md'>
            <div className='container mx-auto flex items-center justify-between py-4 px-6 relative'>
                <button className='p-2' onClick={() => setMenuOpen(!menuOpen)}>
                    <Image
                        src='/images/icons/icon-burger.svg'
                        alt='Menu'
                        width={20}
                        height={20}
                    />
                </button>

                <div className='absolute left-1/2 transform -translate-x-1/2'>
                    <Logo />
                </div>

                <Cart />
            </div>

            {menuOpen && <MobileMenu />}
        </header>
    )
}
