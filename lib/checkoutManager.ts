/**
 * Creates a Shopify Cart (guest or logged-in)
 * Returns the Shopify Cart ID
 */

import { useWishlist } from './stores/wishlistStore'
import { useCustomerStore } from '@/lib/stores/customerStore'

interface IProductLines {
    quantity: number
    merchandiseId: string
}

export async function _createCartObjectFromProducts() {
    const items = useWishlist.getState().items

    const currentLines: IProductLines[] = items.map((item: { variantId: any }) => ({
        merchandiseId: item.variantId, // Make sure this is VARIANT ID
        quantity: 1,
    }))

    const customer = useCustomerStore.getState().customer
    const accessToken = useCustomerStore.getState().accessToken

    const payload: any = { lines: currentLines }

    if (customer && accessToken) {
        payload.buyerIdentity = {
            customerAccessToken: accessToken,
        }
    };
    

    const res = await fetch('/api/cart/create-2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })

    const data = await res.json()

    if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to create cart')
    }

    // 🔥 Return the actual Shopify cart ID
    return data.cart.id
}
