'use client'

import { useState } from 'react'
import Logo from '../logo/logo'
import MobileMenu from '../nav-menu/mobile-menu'
import Cart from '../ui/cart-icon/cart-icon'
import Image from 'next/image'

export default function MobileHeader() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className='w-full border-b bg-white shadow-md md:flex lg:hidden fixed top-0 left-0 right-0 z-50'>
            <div className='container mx-auto flex items-center justify-between py-4 px-6 relative'>
                {/* Бургер-меню */}
                <button
                    className='p-2 flex-shrink-0'
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label='Toggle menu'
                >
                    <Image
                        src='/images/icons/icon-burger.svg'
                        alt='Menu'
                        width={20}
                        height={20}
                    />
                </button>

                {/* Логотип строго по центру */}
                <div className='absolute left-1/2 transform -translate-x-1/2'>
                    <Logo />
                </div>

                {/* Корзина справа */}
                <Cart />
            </div>

            {/* Меню (появляется под хедером) */}
            <div
                className={`absolute left-0 w-full bg-white shadow-lg transition-transform duration-300 ${
                    menuOpen ? 'top-16 opacity-100' : '-top-full opacity-0'
                }`}
            >
                <MobileMenu onClose={() => setMenuOpen(false)} />
            </div>
        </header>
    )
}
