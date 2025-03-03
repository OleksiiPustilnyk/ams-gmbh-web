import Image from 'next/image'
import Link from 'next/link'
import CustomButton from '../ui/buttons/custom-button'
import Logo from '../logo/logo'

interface MobileMenuProps {
    onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
    return (
        <div className='w-[320px] h-full bg-white shadow-lg p-6 relative z-50'>
            {/* Кнопка закрытия */}
            <button
                onClick={onClose}
                className='absolute top-4 right-4 text-gray-600'
            >
                <Image
                    src='/images/icons/icon-close.svg'
                    alt='Close'
                    width={20}
                    height={20}
                />
            </button>

            {/* Логотип */}
            <div className='mb-6 flex justify-center'>
                <Logo />
            </div>

            {/* Поиск */}
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

            {/* Категории */}
            <CustomButton
                leftIcon={
                    <Image
                        src='/images/icons/icon-category.svg'
                        alt='Category'
                        width={15}
                        height={15}
                    />
                }
                rightIcon={
                    <Image
                        src='/images/icons/icon-chevron.svg'
                        alt='Arrow'
                        width={10}
                        height={5}
                        className='ml-7'
                    />
                }
                className='w-full justify-between bg-gray-900 text-white py-2 px-4 mb-4'
            >
                Kategorien
            </CustomButton>

            {/* Навигация */}
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
