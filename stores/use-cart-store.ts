import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/interfaces/product.interface'

interface CartItem {
    product: Product
    quantity: number
}

interface CartStore {
    items: CartItem[]
    isOpen: boolean
    addItem: (product: Product) => void
    removeItem: (slug: string) => void
    updateQuantity: (slug: string, quantity: number) => void
    totalItems: () => number
    openCart: () => void
    closeCart: () => void
    toggleCart: () => void
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,

            addItem: (product) => {
                const items = get().items
                const existing = items.find(
                    (item) => item.product.slug === product.slug,
                )

                if (existing) {
                    const updated = items.map((item) =>
                        item.product.slug === product.slug
                            ? { ...item, quantity: item.quantity + 1 }
                            : item,
                    )
                    set({ items: updated })
                } else {
                    set({ items: [...items, { product, quantity: 1 }] })
                }
            },

            removeItem: (slug) => {
                const filtered = get().items.filter(
                    (item) => item.product.slug !== slug,
                )
                set({ items: filtered })
            },

            updateQuantity: (slug, quantity) => {
                if (quantity < 1) {
                    get().removeItem(slug)
                    return
                }

                const updated = get().items.map((item) =>
                    item.product.slug === slug ? { ...item, quantity } : item,
                )
                set({ items: updated })
            },

            totalItems: () =>
                get().items.reduce((sum, item) => sum + item.quantity, 0),

            openCart: () => set({ isOpen: true }),
            closeCart: () => set({ isOpen: false }),
            toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
        }),
        {
            name: 'cart-storage',
        },
    ),
)
