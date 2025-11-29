// app/api/customer/register/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { customerRegister } from '@/utils/functions/auth/customerRegister'

/**
 *
 * Used to register the customer to the website
 *
 * @param req
 * @returns
 */

export async function POST(req: NextRequest) {
    try {
        const { email, password, firstName, lastName, telephone, country, address } = await req.json()

        if (!email || !password) {
            return NextResponse.json({ error: 'Missing email or password' }, { status: 400 })
        }

        const customer = await customerRegister({
            email,
         password,
         firstName,
         acceptsMarketing   : true,
            lastName,
            phone : telephone
        })

        return NextResponse.json(customer)
    } catch (err: any) {
        return NextResponse.json({ error: err.message || 'Failed to register customer' }, { status: 500 })
    }
}

//  const handleRegister = async () => {
//     setLoading(true)
//     setMessage('')
//     try {
//       const res = await fetch('/api/customer/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       })

//       const data = await res.json()

//       if (data.error) {
//         setMessage(data.error)
//       } else {
//         setMessage(`Customer registered: ${data.email}`)
//       }
//     } catch (err) {
//       console.error(err)
//       setMessage('Registration failed')
//     } finally {
//       setLoading(false)
//     }
