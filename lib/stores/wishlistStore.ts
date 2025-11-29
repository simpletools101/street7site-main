import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { FetchedProducts } from '../wishlistManager'

export interface IWishlistItem extends FetchedProducts {
    
}

interface IWishlistState {
    [x: string]: any
    items: IWishlistItem[]

    addToWishlist: (item: IWishlistItem) => void
    removeFromWishlist: (id: string) => void
    isInWishlist: (id: string) => boolean
    clearWishlist: () => void
}

export const useWishlist = create<IWishlistState>()(
    persist(
        (set, get) => ({
            items: [],

            addToWishlist: (item) => {
                const { items } = get()
                const exists = items.some((p) => p.id === item.id)
                if (exists) return

                set({ items: [...items, item] })
            },

            removeFromWishlist: (id) => {
                const { items } = get()
                set({ items: items.filter((p) => p.id !== id) })
            },

            isInWishlist: (id) => {
                return get().items.some((p) => p.id === id)
            },

            clearWishlist: () => {
                set({ items: [] })
            },
        }),
        {
            name: 'wishlist-storage', // key in localStorage
        }
    )
)
