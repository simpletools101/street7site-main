
/**
 * Used to retrieve an individual cart
 */

import { NextRequest, NextResponse } from 'next/server'
import { retrieveCart } from '@/utils/functions/retrievingCart'

interface Params {
    id: string
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
    try {
        const { id: cartId } = params
        if (!cartId) {
            return NextResponse.json({ error: 'Missing cart ID' }, { status: 400 })
        }

        const cart = await retrieveCart(cartId)
        return NextResponse.json(cart)
    } catch (err) {
        console.error('API retrieveCart error:', err)
        return NextResponse.json({ error: 'Failed to retrieve cart' }, { status: 500 })
    }
}


//   const fetchCart = async () => {
//       try {
//         const res = await fetch(`/api/cart/${cartId}`)
//         if (!res.ok) throw new Error('Failed to fetch cart')
//         const data = await res.json()
//         setCart(data)
//         console.log('CART-DOC', data)
//       } catch (err) {
//         console.error(err)
//       }
//     }