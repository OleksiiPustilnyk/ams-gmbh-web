import Logo from '@/components/logo/logo'
import NavMenu from '@/components/nav-menu/nav-menu'

export default function AdminHeader() {
    return (
        // <div className='z-[9999]'>
        <header className='hidden lg:flex w-full bg-white shadow-md'>
            <div className='container mx-auto flex items-center justify-between py-4'>
                <div className='flex items-center gap-4'>
                    <Logo />
                </div>
                <nav className='flex flex-1 justify-center'>
                    <NavMenu />
                </nav>
                {/* <div className='flex items-center gap-4'>
                        <Search />
                        <Cart />
                    </div> */}
            </div>
        </header>
        // </div>
    )
}
