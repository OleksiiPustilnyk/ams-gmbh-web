import ItemSearch from '../shared/item-filter-input'
import CustomLinkButton from '@/components/ui/admin/links/custom-link-btn'

interface SubHeaderProps {
    onSearch?: (value: string) => void
    placeholder?: string
    createLinkHref: string
    createLinkText: string
}

export default function SubHeader({
    onSearch,
    placeholder,
    createLinkHref,
    createLinkText,
}: SubHeaderProps) {
    return (
        <section
            className='flex items-center gap-2 mb-6 justify-between
            '
        >
            {onSearch && placeholder && (
                <ItemSearch onSearch={onSearch} placeholder={placeholder} />
            )}
            <CustomLinkButton href={createLinkHref} className='mb-2'>
                {createLinkText}
            </CustomLinkButton>
        </section>
    )
}
