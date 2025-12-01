'use client'
import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCustomerStore } from '@/lib/stores/customerStore'

// Define the custom colors based on the image
const ACCENT_COLOR = '#D4A017'
const INPUT_BG_COLOR = '#EFEFEF'

// --- Reusable Input Field Component ---
interface InputFieldProps {
    placeholder: string
    type: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, type, value, onChange }) => {
    return (
        <div className="mb-4 border border-black sm:mb-6 p-3 sm:p-4 overflow-hidden flex items-center">
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full text-base sm:text-lg placeholder-black bg-transparent focus:outline-none"
                aria-label={placeholder}
                style={{ '--tw-ring-color': 'transparent' } as React.CSSProperties}
            />
        </div>
    )
}

// --- Main Application Component ---
export default function LoginItem() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const { setAccessToken, setCustomer } = useCustomerStore.getState()
    const router = useRouter()

    const getCustomerDetails = async (accessToken: string) => {
        const res = await fetch('/api/customer/me', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ accessToken }),
        })

        const data = await res.json()
        if (data.success) return data.customer
        return null
    }

    const handleLogin = async () => {
        setLoading(true)
        setMessage('')

        try {
            const res = await fetch('/api/customer/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            })
            const data = await res.json()

            setAccessToken(data.accessToken)

            const customer = await getCustomerDetails(data.accessToken)
            if (customer) setCustomer(customer)

            if (data.accessToken) {
                setMessage('Login successful')
                router.push('/')
            } else {
                setMessage(data.error || 'Login failed')
            }
        } catch (err) {
            console.error(err)
            setMessage('Login failed')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-white font-sans flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12">
            <div className="w-full max-w-lg">

                {/* Title */}
                <h1 className="text-3xl tb sm:text-4xl md:text-4xl mb-8 sm:mb-10 md:mb-12 text-center text-gray-900 leading-tight">
                    Log into your account
                </h1>

                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleLogin()
                    }}
                >
                    <InputField
                        placeholder="Your E-mail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <InputField
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* Forgot Password Link */}
                    <p className="text-right -mt-2 mb-4">
                        <a
                            href="/forgot-password"
                            className="text-sm hover:underline"
                            style={{ color: ACCENT_COLOR }}
                        >
                            Forgot password?
                        </a>
                    </p>

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full mt-3 sm:mt-4 flex items-center justify-center py-3 sm:py-3.5 md:py-4 transition duration-150 shadow-md hover:shadow-lg active:scale-[0.99]
                        ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        style={{ backgroundColor: '#000000' }}
                    >
                        <span className="text-base sm:text-lg font-semibold mr-2 text-white">
                            {loading ? 'Logging in...' : 'Login'}
                        </span>
                        <ArrowRight size={18} className="sm:w-5 sm:h-5 text-white" />
                    </button>
                </form>

                {/* Status Message */}
                {message && (
                    <p className="text-center mt-4 text-sm font-medium" style={{ color: ACCENT_COLOR }}>
                        {message}
                    </p>
                )}

                {/* Footer */}
                <p className="text-center mt-6 sm:mt-8 text-xs sm:text-sm text-gray-700">
                    Don't have an account?
                    <a href="/register" className="font-medium hover:underline ml-1" style={{ color: ACCENT_COLOR }}>
                        create one now
                    </a>
                </p>
            </div>
        </div>
    )
}
