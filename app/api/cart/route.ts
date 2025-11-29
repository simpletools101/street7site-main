// app/api/cart/route.ts

/**
 * Used for adding products to cart.
 */

import { NextRequest, NextResponse } from 'next/server'
import { addToCart } from '@/utils/functions/addItemtoCart'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { itemId, quantity } = body

        if (!itemId || !quantity) {
            return NextResponse.json({ error: 'Missing itemId or quantity' }, { status: 400 })
        }

        const cartData = await addToCart(itemId, quantity)
        return NextResponse.json(cartData)
    } catch (err) {
        console.error('API addToCart error:', err)
        return NextResponse.json({ error: 'Failed to add to cart' }, { status: 500 })
    }
}


//  const res = await fetch('/api/cart', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ itemId, quantity: '1' }),
//       })

//       if (!res.ok) throw new Error('Failed to add to cart')

//       const data = await res.json()
//       console.log('Cart created:', data)