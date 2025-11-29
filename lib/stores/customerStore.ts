// stores/customerStore.ts
'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface ICustomer {
    id: string
    email: string
    phone?: string
    firstName?: string
    lastName?: string
    [key: string]: any
}

interface CustomerState {
    accessToken: string | null
    customer: ICustomer | null
    setAccessToken: (token: string | null) => void
    setCustomer: (customer: ICustomer | null) => void
    clearCustomer: () => void
}

export const useCustomerStore = create<CustomerState>()(
    persist(
        (set) => ({
            accessToken: null,
            customer: null,
            setAccessToken: (token) => set({ accessToken: token }),
            setCustomer: (customer) => set({ customer }),
            clearCustomer: () => set({ accessToken: null, customer: null }),
        }),
        {
            name: 'customer-storage', // key in storage
            storage: createJSONStorage(() => localStorage),
            // optional: only persist certain fields
            // partialize: (state) => ({ accessToken: state.accessToken, customer: state.customer })
        }
    )
)
