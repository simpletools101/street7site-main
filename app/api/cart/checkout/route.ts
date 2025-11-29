// app/api/cart/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getCheckoutUrl } from '@/utils/functions/retrieveCheckoutURL'

/**
 * Used to retrieve the checkout url.
 * @param req 
 * @returns 
 */

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { cartId } = body

        if (!cartId) {
            return NextResponse.json({ error: 'Missing cart ID' }, { status: 400 })
        }

        const data = await getCheckoutUrl(cartId)
        return NextResponse.json(data)
    } catch (err) {
        console.error('API getCheckoutUrl error:', err)
        return NextResponse.json({ error: 'Failed to get checkout URL' }, { status: 500 })
    }
}


//   const handleCheckout = async () => {
//     setLoading(true)
//     try {
//       const res = await fetch('/api/cart/checkout', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ cartId }),
//       })

//       if (!res.ok) throw new Error('Failed to get checkout URL')

//       const data = await res.json()
//       console.log('Checkout URL:', data.checkoutUrl)

//       if (data.checkoutUrl) {
//         window.location.href = data.checkoutUrl
//       }
//     } catch (err) {
//       console.error(err)
//     } finally {
//       setLoading(false)
//     }
