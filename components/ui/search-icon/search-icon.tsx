import Image from 'next/image'

export default function Search() {
    return (
        <button className='p-2 hover:bg-gray-100 rounded-md transition'>
            <Image
                src='/images/icons/icon-search.svg'
                alt='Search'
                width={20}
                height={20}
            />
        </button>
    )
}
