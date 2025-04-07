import { DeleteIcon } from '@/components/ui/icons/icon-admin-delete'
import { EditIcon } from '@/components/ui/icons/icon-admin-edit'
import { ProductTableProps } from '@/view/admin-panel/products/products.types'
import Link from 'next/link'

export default function ProductTable({
    products,
    updateLinkHref,
    onDeleteProduct,
}: ProductTableProps) {
    return (
        <section>
            <div className='grid grid-cols-[50px_2fr_1fr_1fr_85px] gap-2 font-semibold border-b-2 pb-2'>
                <span>#</span>
                <span>Name</span>
                <span>Article number</span>
                <span>Price</span>
            </div>
            <ul>
                {products.map((product, index) => (
                    <li
                        key={product.id}
                        className='grid grid-cols-[50px_2fr_1fr_1fr_85px] gap-2 py-2 border-b last:border-b-0 items-center'
                    >
                        <span>{index + 1}</span>
                        <span>{product.name}</span>
                        <span>{product.articleNumber}</span>
                        <span>{product.price}</span>
                        <div className='flex items-center gap-2 justify-self-end'>
                            <Link
                                href={`${updateLinkHref}/${product.id}`}
                                className='p-2 hover:bg-gray-100 rounded-md transition'
                            >
                                <EditIcon className='w-5 h-5 text-green-600' />
                            </Link>
                            <button
                                className='p-2 hover:bg-gray-100 rounded-md transition'
                                onClick={() => onDeleteProduct(product.id)}
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
