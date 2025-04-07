'use client'

import PdfUploader from '@/components/admin-panel/forms/pdf-uploader'

export default function AdminCatalogView() {
    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <h1 className='text-2xl font-bold mb-6'>Upload new catalog</h1>
            <PdfUploader />
        </div>
    )
}
