/**
 * Used to retrieve an individual cart
 */

import { NextRequest, NextResponse } from 'next/server'
import { retrieveCart } from '@/utils/functions/retrievingCart'

export async function GET(req: NextRequest, context: { params: { id: string } }) {
    try {
        const cartId = context.params.id

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
