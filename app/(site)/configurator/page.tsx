import { getPageTitle } from '@/helpers/get-page-title'
import ConfiguratorView from '@/view/configurator'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: getPageTitle('/configurator'),
    }
}

export default async function ConfiguratorPage() {
    return <ConfiguratorView />
}
