'use client'
import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const ACCENT_COLOR = '#D4A017'

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const handleReset = async () => {
        setLoading(true)
        setMessage('')

        try {
            const res = await fetch('/api/customer/recover', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            })

            const data = await res.json()

            if (data.success) {
                setMessage('Password reset link has been sent to your email.')
            } else {
                setMessage(data.error || 'Failed to send reset link.')
            }
        } catch (err) {
            console.error(err)
            setMessage('Failed to send reset link.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-white font-sans flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-lg">
                <h1 className="text-3xl sm:text-4xl mb-10 text-center text-gray-900">Reset your password</h1>

                <div className="mb-6 border border-black p-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-lg placeholder-black bg-transparent focus:outline-none"
                    />
                </div>

                <button
                    onClick={handleReset}
                    disabled={loading}
                    className={`w-full flex items-center justify-center py-3 transition duration-150 shadow-md hover:shadow-lg active:scale-[0.99]
                    ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    style={{ backgroundColor: '#000000' }}
                >
                    <span className="text-base sm:text-lg font-semibold mr-2 text-white">
                        {loading ? 'Sending...' : 'Send reset link'}
                    </span>
                    <ArrowRight size={18} className="text-white" />
                </button>

                {message && (
                    <p className="text-center mt-4 text-sm font-medium" style={{ color: ACCENT_COLOR }}>
                        {message}
                    </p>
                )}

                <p className="text-center mt-8 text-sm">
                    <a href="/login" className="hover:underline" style={{ color: ACCENT_COLOR }}>
                        Return to login
                    </a>
                </p>
            </div>
        </div>
    )
}
