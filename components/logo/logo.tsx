import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href='/' className='flex items-center gap-2'>
            <Image
                src='/images/logo/logo.svg'
                alt='AMS GmbH'
                width={200}
                height={40}
                style={{ width: 'auto', height: 'auto' }}
            />
        </Link>
    )
}
