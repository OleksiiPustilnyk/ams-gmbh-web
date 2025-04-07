'use client'

import { useEffect, useState } from 'react'
import Logo from '../logo/logo'
import MobileMenu from '../nav-menu/mobile-menu'
import Cart from '../ui/cart/cart'
import { BurgerIcon } from '../ui/icons/icon-burger'

export default function MobileHeader() {
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [menuOpen])

    return (
        <header className='w-full h-16 border-b bg-white border-customGray-200 md:flex lg:hidden top-0 left-0 right-0 z-50'>
            <div className='container mx-auto flex items-center justify-between py-4 px-2 relative'>
                <button
                    className='p-2 flex-shrink-0'
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label='Toggle menu'
                >
                    <BurgerIcon className='w-5 h-5' />
                </button>
                <div className='absolute left-1/2 transform -translate-x-1/2'>
                    <Logo />
                </div>
                <Cart />
            </div>

            <div
                className={`absolute left-0 w-full bg-white shadow-lg transition-all duration-300 z-40 ${
                    menuOpen
                        ? 'top-16 opacity-100 visible'
                        : '-top-full opacity-0 invisible'
                }`}
            >
                <MobileMenu onClose={() => setMenuOpen(false)} />
            </div>
        </header>
    )
}
