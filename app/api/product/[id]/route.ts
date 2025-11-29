
/**
 * Used to get a particular product.
 */

import { NextRequest, NextResponse } from 'next/server'
import { fetchProduct } from '@/utils/functions/fetchProduct'

interface Params {
    id: string
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
    try {
        const { id } = params
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


// const fetchData = async () => {
//       try {
//         const res = await fetch(`/api/product/${params.id}`)
//         if (!res.ok) throw new Error('Failed to fetch product')
//         const data = await res.json()
//         setProduct(data)
//         console.log('PRODUCT-DOC', data)
//       } catch (err) {
//         console.error(err)
//       }
//     }