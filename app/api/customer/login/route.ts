// app/api/customer/login/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { customerLogin } from '@/utils/functions/auth/customerLogin'

/**
 * Used for login in the user.
 * @param req 
 * @returns 
 */

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json()
        if (!email || !password) {
            return NextResponse.json({ error: 'Missing email or password' }, { status: 400 })
        }

        const token = await customerLogin(email, password)

        // Optional: store token in HTTP-only cookie
        return NextResponse.json(token)
    } catch (err: any) {
        return NextResponse.json({ error: err.message || 'Failed to login' }, { status: 500 })
    }
}



//   const handleLogin = async () => {
//     try {
//       const res = await fetch('/api/customer/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       })
//       const data = await res.json()
//       console.log('Customer token:', data.accessToken)
//     } catch (err) {
//       console.error(err)
//     }
//   }