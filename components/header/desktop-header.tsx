'use client'

import Logo from '../logo/logo'
import CategoryDropdown from '../dropdown/category-dropdown'
import NavMenu from '../nav-menu/nav-menu'
import SearchToggle from '../ui/search/search-toggle'
import Cart from '../ui/cart/cart'

export default function DesktopHeader() {
    return (
        <header className='hidden lg:flex w-full bg-white border-b border-customGray-200'>
            <div className='xl:container mx-auto flex items-center justify-between py-4'>
                <div className='flex items-center gap-4'>
                    <Logo />
                    <div className='ml-auto'>
                        <CategoryDropdown />
                    </div>
                </div>
                <nav className='flex flex-1 justify-center'>
                    <NavMenu />
                </nav>
                <div className='flex items-center gap-4'>
                    <SearchToggle />
                    <Cart />
                </div>
            </div>
        </header>
    )
}
