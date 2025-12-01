'use client'
import React, { useState } from 'react'
import { ArrowRight, Eye, EyeOff } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const ACCENT_COLOR = '#D4A017'
const INPUT_BG_COLOR = '#EFEFEF'

// --- Reusable Input Field Component ---
interface InputFieldProps {
    placeholder: string
    type: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    error?: string
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, type, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false)
    const isPasswordField = type === 'password'

    return (
        <div className="mb-4 sm:mb-5">
            <div
                className={`p-3 border border-black sm:p-4 overflow-hidden flex items-center ${
                    error ? 'ring-2 ring-red-500' : ''
                }`}
            >
                <input
                    type={isPasswordField && showPassword ? 'text' : type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full text-base sm:text-lg placeholder-gray-600 bg-transparent focus:outline-none"
                    aria-label={placeholder}
                    style={{ '--tw-ring-color': 'transparent' } as React.CSSProperties}
                />
                {isPasswordField && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="ml-2 text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                )}
            </div>
            {error && (
                <motion.p
                    className="text-red-600 text-xs sm:text-sm mt-1 ml-1"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {error}
                </motion.p>
            )}
        </div>
    )
}

// --- Select Field Component ---
interface SelectFieldProps {
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    options: { value: string; label: string }[]
    error?: string
}

const SelectField: React.FC<SelectFieldProps> = ({ placeholder, value, onChange, options, error }) => {
    return (
        <div className="mb-4 sm:mb-5">
            <div className={`p-3 sm:p-4 border border-black overflow-hidden ${error ? 'ring-2 ring-red-500' : ''}`}>
                <select
                    value={value}
                    onChange={onChange}
                    className="w-full text-base sm:text-lg bg-transparent focus:outline-none cursor-pointer"
                    style={{ color: value ? '#000' : '#666' }}
                    aria-label={placeholder}
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            {error && (
                <motion.p
                    className="text-red-600 text-xs sm:text-sm mt-1 ml-1"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {error}
                </motion.p>
            )}
        </div>
    )
}

/**
 * The expected Country Codes
 */
const countryCodes = [
    { code: '+1', label: 'US/CA (+1)' },
    { code: '+44', label: 'UK (+44)' },
    { code: '+61', label: 'Australia (+61)' },
    { code: '+256', label: 'Uganda (+256)' },
    { code: '+254', label: 'Kenya (+254)' },
    { code: '+234', label: 'Nigeria (+234)' },
    { code: '+27', label: 'South Africa (+27)' },
    { code: '+49', label: 'Germany (+49)' },
    { code: '+33', label: 'France (+33)' },
    { code: '+39', label: 'Italy (+39)' },
    { code: '+34', label: 'Spain (+34)' },
    { code: '+91', label: 'India (+91)' },
    { code: '+86', label: 'China (+86)' },
    { code: '+81', label: 'Japan (+81)' },
]

// --- Countries List ---
const countries = [
    { value: 'US', label: 'United States' },
    { value: 'GB', label: 'United Kingdom' },
    { value: 'CA', label: 'Canada' },
    { value: 'AU', label: 'Australia' },
    { value: 'UG', label: 'Uganda' },
    { value: 'KE', label: 'Kenya' },
    { value: 'NG', label: 'Nigeria' },
    { value: 'ZA', label: 'South Africa' },
    { value: 'DE', label: 'Germany' },
    { value: 'FR', label: 'France' },
    { value: 'IT', label: 'Italy' },
    { value: 'ES', label: 'Spain' },
    { value: 'IN', label: 'India' },
    { value: 'CN', label: 'China' },
    { value: 'JP', label: 'Japan' },
    // Add more countries as needed
]

// --- Main Component ---
export default function RegisterItem() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        telephone: '',
        countryCode: '',
        country: '',
        address: '',
        city: '',
        province: '',
        zip: '',
    })

    const [errors, setErrors] = useState<Record<string, string>>({})
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: '' }))
        }
    }

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        // First Name validation
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required'
        }

        // Last Name validation
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required'
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required'
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters'
        }

        // Confirm Password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password'
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'
        }

        // Telephone validation
        const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
        if (!formData.telephone.trim()) {
            newErrors.telephone = 'Telephone number is required'
        } else if (!phoneRegex.test(formData.telephone)) {
            newErrors.telephone = 'Please enter a valid telephone number'
        }

      
        // Country validation
        if (!formData.country) {
            newErrors.country = 'Please select your country'
        }


        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleRegister = async () => {
        setLoading(true)
        setMessage('')
        try {
            const res = await fetch('/api/customer/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    phone: `${formData.countryCode}${formData.telephone}`, // main phone
                    acceptsMarketing: true,

                }),
            })

            const data = await res.json()
            if (data.error) {
                setMessage(data.error)
            } else {
                setMessage(`Account created successfully for ${data.email}`)
                // Optionally redirect to login or dashboard
                router.push('/login')
            }
        } catch (err) {
            console.error(err)
            setMessage('Registration failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const handleCreateAccount = async (e: React.FormEvent) => {
        e.preventDefault()

        if (validateForm()) {
            await handleRegister()
        } else {
            setMessage('Please fix the errors above')
        }
    }

    return (
        <div className="min-h-screen bg-white font-sans flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12">
            <motion.div
                className="w-full max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Title */}
                <motion.h1
                    className="text-3xl tb sm:text-4xl md:text-4xl mb-8 sm:mb-10 md:mb-12 text-center text-gray-900 leading-tight"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Create an account
                </motion.h1>

                {/* Form */}
                <form onSubmit={handleCreateAccount}>
                    {/* Name Fields - Side by Side on larger screens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                        <InputField
                            placeholder="First name"
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            error={errors.firstName}
                        />
                        <InputField
                            placeholder="Last name"
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            error={errors.lastName}
                        />
                    </div>

                    {/* Email */}
                    <InputField
                        placeholder="Your E-mail"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        error={errors.email}
                    />

                    {/* Password Fields - Side by Side on larger screens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                        <InputField
                            placeholder="Password"
                            type="password"
                            value={formData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            error={errors.password}
                        />
                        <InputField
                            placeholder="Confirm password"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                            error={errors.confirmPassword}
                        />
                    </div>

                    {/* Telephone */}
                    <div className="mb-4 sm:mb-5">
                        <div
                            className={`p-3 sm:p-4  border border-black overflow-hidden flex items-center ${
                                errors.telephone ? 'ring-2 ring-red-500' : ''
                            }`}
                        >
                            {/* Country Code Dropdown */}
                            <select
                                value={formData.countryCode}
                                onChange={(e) => handleInputChange('countryCode', e.target.value)}
                                className="mr-2 bg-transparent text-base sm:text-lg focus:outline-none cursor-pointer"
                                style={{ color: formData.countryCode ? '#000' : '#666' }}
                            >
                                <option value="" disabled>
                                    Select Country
                                </option>

                                {countryCodes.map((c) => (
                                    <option key={c.code} value={c.code}>
                                        {c.label}
                                    </option>
                                ))}
                            </select>

                            {/* Actual phone input */}
                            <input
                                type="tel"
                                value={formData.telephone}
                                onChange={(e) => handleInputChange('telephone', e.target.value)}
                                placeholder="Telephone number"
                                className="w-full text-base sm:text-lg placeholder-gray-600 bg-transparent focus:outline-none"
                            />
                        </div>

                        {errors.telephone && (
                            <motion.p
                                className="text-red-600 text-xs sm:text-sm mt-1 ml-1"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {errors.telephone}
                            </motion.p>
                        )}
                    </div>

                    {/* Country */}
                    <SelectField
                        placeholder="Select your country"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        options={countries}
                        error={errors.country}
                    />

                    

                    {/* Create Account Button */}
                    <motion.button
                        type="submit"
                        disabled={loading}
                        className={`w-full mt-3 sm:mt-4 flex items-center justify-center py-3 sm:py-3.5 md:py-4 transition duration-150 shadow-md hover:shadow-lg active:scale-[0.99] 
                        ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        style={{ backgroundColor: '#000000' }}
                        whileHover={!loading ? { scale: 1.02 } : {}}
                        whileTap={!loading ? { scale: 0.98 } : {}}
                    >
                        <span className="text-base sm:text-lg font-semibold mr-2 text-white">
                            {loading ? 'Creating account...' : 'Create account'}
                        </span>
                        <ArrowRight size={18} className="sm:w-5 sm:h-5 text-white" />
                    </motion.button>
                </form>

                {/* Status Message */}
                {message && (
                    <motion.p
                        className={`text-center mt-4 text-sm sm:text-base font-medium ${
                            message.includes('successfully') ? 'text-green-600' : 'text-red-600'
                        }`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {message}
                    </motion.p>
                )}

                {/* Footer Link */}
                <motion.p
                    className="text-center mt-5 sm:mt-6 text-xs sm:text-sm text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    Already have an account?
                    <a href="/login" className="font-medium hover:underline ml-1" style={{ color: ACCENT_COLOR }}>
                        Log in now
                    </a>
                </motion.p>
            </motion.div>
        </div>
    )
}
