import { DeleteIcon } from '@/components/ui/icons/icon-admin-delete'
import { EditIcon } from '@/components/ui/icons/icon-admin-edit'
import { BlogTableProps } from '@/view/admin-panel/blogs/blogs.types'
import Link from 'next/link'

export default function BlogTable({
    blogs,
    updateLinkHref,
    onDeleteBlog,
}: BlogTableProps) {
    return (
        <section>
            <div className='grid grid-cols-[50px_2fr_1fr_85px] gap-2 font-semibold border-b-2 pb-2'>
                <span>#</span>
                <span>Title</span>
                <span>Blog category</span>
            </div>
            <ul>
                {blogs.map((blog, index) => (
                    <li
                        key={blog.id}
                        className='grid grid-cols-[50px_2fr_1fr_85px] gap-2 py-2 border-b last:border-b-0 items-center'
                    >
                        <span>{index + 1}</span>
                        <span>{blog.title}</span>
                        <span>{blog.blogCategory}</span>
                        <div className='flex items-center gap-2 justify-self-end'>
                            <Link
                                href={`${updateLinkHref}/${blog.id}`}
                                className='p-2 hover:bg-gray-100 rounded-md transition'
                            >
                                <EditIcon className='w-5 h-5 text-green-600' />
                            </Link>
                            <button
                                className='p-2 hover:bg-gray-100 rounded-md transition'
                                onClick={() => onDeleteBlog(blog.id)}
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
