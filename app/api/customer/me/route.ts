// app/api/customer/me/route.ts
import { NextResponse } from 'next/server'
import { fetchCustomer } from '@/utils/functions/auth/customerQuery'

export async function POST(req: Request) {
    try {
        const { accessToken } = await req.json()

        if (!accessToken) {
            return NextResponse.json({ success: false, error: 'Access token is required' }, { status: 400 })
        }

        // Use the reusable function
        const customer = await fetchCustomer({ accessToken })

        return NextResponse.json({
            success: true,
            customer,
        })
    } catch (error: any) {
        console.error('Shopify fetch customer error:', error)
        return NextResponse.json({ success: false, error: error.message }, { status: 400 })
    }
}
