import CartSidebar from '../cart-sidebar/cart-sidebar'
import DesktopHeader from './desktop-header'
import MobileHeader from './mobile-header'

export default function Header() {
    return (
        <div className='w-full z-[9999]'>
            <DesktopHeader />
            <MobileHeader />
            <CartSidebar />
        </div>
    )
}
