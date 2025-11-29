// app/api/customer/recover/route.ts
import { NextResponse } from 'next/server'
import { sendPasswordResetEmail } from '@/utils/functions/auth/sendPasswordReset'

export async function POST(req: Request) {
    try {
        const { email } = await req.json()

        if (!email || typeof email !== 'string') {
            return NextResponse.json({ success: false, error: 'Valid email is required.' }, { status: 400 })
        }

        await sendPasswordResetEmail(email)

        return NextResponse.json({
            success: true,
            message: 'Password reset email sent successfully.',
        })
    } catch (error: any) {
        return NextResponse.json(
            {
                success: false,
                error: error.message || 'Failed to send password reset email.',
            },
            { status: 500 }
        )
    }
}
