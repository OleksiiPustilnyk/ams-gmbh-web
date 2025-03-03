import DesktopHeader from './desktop-header'
import MobileHeader from './mobile-header'

export default function Header() {
    return (
        <div className='z-[9999]'>
            <DesktopHeader />
            <MobileHeader />
        </div>
    )
}
