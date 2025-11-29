import { NextRequest, NextResponse } from 'next/server'
import { getProducts } from '@/utils/functions/getProducts'

/**
 * Used to get the products from the shopify store.
 * @param req 
 * @returns 
 */

export async function GET(req: NextRequest) {
    try {
        const products = await getProducts()
        return NextResponse.json(products)
    } catch (err) {
        console.error('API route error:', err)
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
    }
}
