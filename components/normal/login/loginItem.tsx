"use client"
import React from 'react'
import { ArrowRight } from 'lucide-react'

// Define the custom colors based on the image
const ACCENT_COLOR = '#D4A017'
const INPUT_BG_COLOR = '#EFEFEF'

// --- Reusable Input Field Component ---
interface InputFieldProps {
    placeholder: string
    type: string
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, type }) => {
    return (
        <div
            className="mb-4 sm:mb-6 p-3 sm:p-4 overflow-hidden flex items-center"
            style={{ backgroundColor: INPUT_BG_COLOR }}
        >
            <input
                type={type}
                placeholder={placeholder}
                className="w-full text-base sm:text-lg placeholder-black bg-transparent focus:outline-none"
                aria-label={placeholder}
                // Hide default browser focus ring
                style={{ '--tw-ring-color': 'transparent' } as React.CSSProperties}
            />
        </div>
    )
}

// --- Main Application Component ---
export default function LoginItem() {
    const handleLogin = () => {
        console.log('Login clicked')
        // Here you would implement your login logic
    }

    return (
        <div className="min-h-screen bg-white font-sans flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12">
            <div className="w-full max-w-lg">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10 md:mb-12 text-center text-gray-900 leading-tight">
                    Log into your account
                </h1>

                {/* Input Fields */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleLogin()
                    }}
                >
                    {/* Note: The placeholder text in the image implies 'Your name' is the first field */}
                    <InputField placeholder="Your name" type="text" />
                    <InputField placeholder="Your E-mail" type="email" />

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full mt-3 sm:mt-4 flex items-center justify-center py-3 sm:py-3.5 md:py-4 transition duration-150 shadow-md hover:shadow-lg active:scale-[0.99]"
                        style={{ backgroundColor: '#000000' }}
                    >
                        <span className="text-base sm:text-lg font-semibold mr-2" style={{ color: ACCENT_COLOR }}>
                            Login
                        </span>
                        <ArrowRight size={18} className="sm:w-5 sm:h-5" style={{ color: ACCENT_COLOR }} />
                    </button>
                </form>

                {/* Footer Link */}
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