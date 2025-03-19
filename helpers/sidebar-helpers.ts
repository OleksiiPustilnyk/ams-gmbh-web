import { formatDateToArchive } from '@/helpers/format-date-to-archive'

interface Article {
    date: string
    category: string
}

export function extractCategories(articles: Article[]): string[] {
    return Array.from(new Set(articles.map((article) => article.category)))
}

export function extractArchiveDates(articles: Article[]): string[] {
    return Array.from(
        new Set(articles.map((article) => formatDateToArchive(article.date))),
    )
}
