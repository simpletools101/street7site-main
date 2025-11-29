/**
 * Used to get a particular product.
 */
import { NextRequest, NextResponse } from 'next/server'
import { fetchProduct } from '@/utils/functions/fetchProduct'

interface Params {
    id: string
}

export async function GET(
    req: NextRequest, 
    { params }: { params: Promise<Params> }
) {
    try {
        const { id } = await params
        
        if (!id) {
            return NextResponse.json({ error: 'Missing product ID' }, { status: 400 })
        }
        
        const product = await fetchProduct(id)
        return NextResponse.json(product)
    } catch (err) {
        console.error('API fetchProduct error:', err)
        return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 })
    }
}