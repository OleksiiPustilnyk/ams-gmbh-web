import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href='/' className='relative w-[200px] h-10 flex items-center'>
            <Image
                src='/images/logo/logo.svg'
                alt='AMS GmbH'
                fill
                className='object-contain'
                priority
            />
        </Link>
    )
}
