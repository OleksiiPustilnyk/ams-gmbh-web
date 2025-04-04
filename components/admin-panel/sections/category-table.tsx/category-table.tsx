import { DeleteIcon } from '@/components/ui/icons/icon-admin-delete'
import { EditIcon } from '@/components/ui/icons/icon-admin-edit'

import { CategoryTableProps } from '@/view/admin-panel/categories/categories.types'
import Link from 'next/link'

export default function CategoryTable({
    categories,
    updateLinkHref,
    onDeleteCategory,
}: CategoryTableProps) {
    return (
        <section>
            <div className='grid grid-cols-[50px_2fr_1fr_85px] gap-2 font-semibold border-b-2 pb-2'>
                <span>#</span>
                <span>Name</span>
                <span>Category link</span>
            </div>
            <ul>
                {categories.map((category, index) => (
                    <li
                        key={category.id}
                        className='grid grid-cols-[50px_2fr_1fr_85px] gap-2 py-2 border-b last:border-b-0 items-center'
                    >
                        <span>{index + 1}</span>
                        <span>{category.name}</span>
                        <span>{category.link}</span>
                        <div className='flex items-center gap-2 justify-self-end'>
                            <Link
                                href={`${updateLinkHref}/${category.id}`}
                                className='p-2 hover:bg-gray-100 rounded-md transition'
                            >
                                <EditIcon className='w-5 h-5 text-green-600' />
                            </Link>
                            <button
                                className='p-2 hover:bg-gray-100 rounded-md transition'
                                onClick={() => onDeleteCategory(category.id)}
                            >
                                <DeleteIcon className='w-5 h-5 text-red-600' />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
