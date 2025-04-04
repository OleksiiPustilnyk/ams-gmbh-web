'use client'

import AddTerraceConfigForm from '@/components/admin-panel/forms/add-terrace-config-form'

export default function CreateTerraceConfigView() {
    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <h1 className='text-2xl font-bold mb-6'>
                Add new roof configurator item
            </h1>
            <AddTerraceConfigForm />
        </div>
    )
}
