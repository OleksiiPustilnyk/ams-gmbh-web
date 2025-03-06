import Image from 'next/image'
import Link from 'next/link'
import Logo from '../logo/logo'
import CategoryDropdown from '../dropdown/category-dropdown'

interface MobileMenuProps {
    onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
    return (
        <div className='fixed top-16 left-0 w-[90%] md:w-[50%] h-screen bg-white shadow-lg p-6 overflow-y-auto'>
            <div className='mb-6 flex justify-start'>
                <Logo />
            </div>
            <button
                onClick={onClose}
                className='absolute top-10 right-4 text-gray-600'
            >
                <Image
                    src='/images/icons/icon-close.svg'
                    alt='Close'
                    width={10}
                    height={10}
                />
            </button>
            <div className='flex items-center border border-gray-300 rounded-lg px-3 py-2 mb-4'>
                <input
                    type='text'
                    placeholder='What are you looking for?'
                    className='flex-1 outline-none text-gray-700 placeholder-gray-500'
                />
                <button className='ml-2 text-gray-700 text-sm font-semibold'>
                    Suche
                </button>
            </div>
            <CategoryDropdown />
            <nav className='space-y-4 text-gray-700'>
                <Link href='/preisanfrage' className='block hover:text-primary'>
                    Preisanfrage Profi
                </Link>
                <Link href='/katalog' className='block hover:text-primary'>
                    Produktkatalog für Privatkunden
                </Link>
                <Link href='/about' className='block hover:text-primary'>
                    Über uns
                </Link>
                <Link href='/blog' className='block hover:text-primary'>
                    Blog
                </Link>
                <Link href='/contact' className='block hover:text-primary'>
                    Kontakt
                </Link>
            </nav>
        </div>
    )
}
