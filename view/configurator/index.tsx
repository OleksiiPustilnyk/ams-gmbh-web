import ConfiguratorSection from '@/components/sections/configurator/configurator-section'
import Breadcrumbs from '@/components/ui/bread-crumbs/bread-crumbs'

export default function ConfiguratorView() {
    return (
        <div className='w-full container mx-auto pt-6 pb-10 px-4 lg:px-0'>
            <Breadcrumbs />

            <ConfiguratorSection />
        </div>
    )
}
