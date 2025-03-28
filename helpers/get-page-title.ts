import { breadcrumbNames } from '@/constants/breadcrumb-names'

export function getPageTitle(pathname: string): string {
    const segments = pathname.split('/').filter(Boolean)
    const lastSegment = segments[segments.length - 1] || 'home'

    const title = breadcrumbNames[lastSegment] || 'AMS GmbH'
    return `${title} | AMS GmbH`
}
