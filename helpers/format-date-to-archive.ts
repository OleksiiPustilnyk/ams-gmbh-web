import { monthsDE } from '@/constants/months'

export function formatDateToArchive(dateString: string): string {
    const [, month, year] = dateString.split('.')

    const monthIndex = parseInt(month, 10) - 1
    const monthName = monthsDE[monthIndex]

    return `${monthName} ${year}`
}
