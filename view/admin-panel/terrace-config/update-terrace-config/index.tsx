'use client'

import { TerraceConfig } from '../terrace-config.types'
import UpdateTerraceConfigForm from '@/components/admin-panel/forms/update-terrace-config-form'

interface UpdateTerraceConfigViewProps {
    terraceConfig: TerraceConfig
    // to do
}

export default function UpdateTerraceConfigView({
    terraceConfig,
}: UpdateTerraceConfigViewProps) {
    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <h1 className='text-2xl font-bold mb-6'>
                Update roof configurator item
            </h1>
            <UpdateTerraceConfigForm terraceConfig={terraceConfig} />
        </div>
    )
}
