// to do: rewrite Category

export interface Category {
    id: string
    name: string
    link: string
    imageId: string
}

export interface AdminCategoryViewProps {
    categories: Category[]
}

export interface CategoryTableProps {
    categories: Category[]
    updateLinkHref: string
    onDeleteCategory: (categoryId: string) => void
}

export interface AddCategoryInput {
    name: string
    link: string
    image: File
}

export interface UpdateCategoryInput extends Omit<AddCategoryInput, 'image'> {
    id: string
    image?: File
}
