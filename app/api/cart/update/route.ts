// app/api/cart/update/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { updateCart } from '@/utils/functions/updateCart'


/**
 * Used to update the cart.
 * @param req 
 * @returns 
 */

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { cartId, itemId, quantity } = body

        if (!cartId || !itemId || !quantity) {
            return NextResponse.json({ error: 'Missing cartId, itemId, or quantity' }, { status: 400 })
        }

        const updatedCart = await updateCart(cartId, itemId, quantity)
        return NextResponse.json(updatedCart)
    } catch (err) {
        console.error('API updateCart error:', err)
        return NextResponse.json({ error: 'Failed to update cart' }, { status: 500 })
    }
}


//   try {
//       const res = await fetch('/api/cart/update', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ cartId, itemId, quantity: '1' }),
//       })

//       if (!res.ok) throw new Error('Failed to update cart')

//       const data = await res.json()
//       console.log('Updated Cart:', data)
//     } catch (err) {
//       console.error(err)
//     } finally {
//       setLoading(false)
//     }