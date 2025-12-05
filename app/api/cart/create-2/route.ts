import { NextResponse } from 'next/server'
import { createCart2 } from '@/utils/functions/createCart2'

export async function POST(req: Request) {
    try {
        const body = await req.json();

        

        const { lines = [], buyerIdentity = null } = body

        const cart = await createCart2({
            lines,
            buyerIdentity,
        })

        return NextResponse.json(
            {
                success: true,
                cart,
            },
            { status: 200 }
        )
    } catch (err: any) {
        console.error('API Cart Create Error:', err)

        return NextResponse.json(
            {
                success: false,
                error: err?.message || 'Failed to create cart',
            },
            { status: 500 }
        )
    }
}
