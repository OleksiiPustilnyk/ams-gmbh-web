import { SearchIcon } from '../icons/icon-search'

export default function Search() {
    return (
        <button className='p-2 hover:bg-customGray-100 rounded-md transition'>
            <SearchIcon className='w-5 h-5' />
        </button>
    )
}
