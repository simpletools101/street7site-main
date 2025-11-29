'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ChangeLink } from './utils'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogIn, LogOut, X, Eye, EyeOff } from 'lucide-react'
import { useCustomerStore } from '@/lib/stores/customerStore'

interface ProfileInputProps {
    label: string
    value: string
    placeholder: string
    delay: number
}

const ProfileInput: React.FC<ProfileInputProps> = ({ label, value, placeholder, delay }) => (
    <motion.div
        className="p-3 sm:p-4 rounded-lg bg-neutral-200 flex flex-col justify-center min-h-[56px] sm:min-h-[60px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay, ease: 'easeOut' }}
        whileHover={{ scale: 1.02, backgroundColor: 'rgba(229, 229, 229, 1)' }}
    >
        <span className="text-xs text-gray-500 mb-0.5">{label}</span>
        <span className="text-sm font-medium text-gray-800 break-all">{value}</span>
        <input type="hidden" defaultValue={value} />
    </motion.div>
)

const ProfileContent: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [showPasswordModal, setShowPasswordModal] = useState(false)
    const [passwordForm, setPasswordForm] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    })
    const [showPasswords, setShowPasswords] = useState({
        current: false,
        new: false,
        confirm: false,
    })
    const [passwordError, setPasswordError] = useState('')
    const [passwordSuccess, setPasswordSuccess] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [currentUserDetails, setUserDetails] = useState<{
        userName: string
        userEmail: string
        userImage: string | null | undefined
    }>({
        userImage: null,
        userName: 'Street7 User',
        userEmail: '@street7.com',
    })
    const { customer } = useCustomerStore()

    const router = useRouter()

    const handleLogin = () => {
        router.push('/login')
    }

    useEffect(() => {
        const intialRun = async () => {
            /**
             * Check for authenticated User.
             */
            if (customer && customer != null) {
                setIsLoggedIn(true);
                setUserDetails({
                    userEmail : customer.email,
                    userName : `${customer.firstName}\t ${customer.lastName}`,
                    userImage : null
                })
            } else {
                setIsLoggedIn(false)
            }
        }
        intialRun()
    }, [])

    const handleLogout = async () => {
        // await authClient.signOut().then((success) => {
        //     if (success) {
        //         setIsLoggedIn(false)
        //         router.push('/')
        //     }
        // })
    }

    const handlePasswordChange = async (e: React.FormEvent) => {
        e.preventDefault()
        setPasswordError('')
        setPasswordSuccess(false)

        // Validation
        if (!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword) {
            setPasswordError('All fields are required')
            return
        }

        if (passwordForm.newPassword.length < 8) {
            setPasswordError('New password must be at least 8 characters')
            return
        }

        if (passwordForm.newPassword !== passwordForm.confirmPassword) {
            setPasswordError('New passwords do not match')
            return
        }

        setIsSubmitting(true)

        try {
            // Call your password change API
            // await authClient.changePassword({
            //     currentPassword: passwordForm.currentPassword,
            //     newPassword: passwordForm.newPassword,
            //     revokeOtherSessions: true,
            // })

            setPasswordSuccess(true)
            setPasswordForm({
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
            })

            // Close modal after 2 seconds
            setTimeout(() => {
                setShowPasswordModal(false)
                setPasswordSuccess(false)
            }, 2000)
        } catch (error: any) {
            setPasswordError(error.message || 'Failed to change password. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const togglePasswordVisibility = (field: 'current' | 'new' | 'confirm') => {
        setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }))
    }

    // If user is not logged in, show login prompt
    if (!isLoggedIn) {
        return (
            <motion.div
                className="flex flex-col items-center justify-center py-12 sm:py-16 space-y-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-neutral-200 flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, type: 'spring', delay: 0.2 }}
                >
                    <LogIn className="w-10 h-10 sm:w-12 sm:h-12 text-gray-600" />
                </motion.div>
                <motion.h2
                    className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Sign in to view your profile
                </motion.h2>
                <motion.p
                    className="text-sm sm:text-base text-gray-600 text-center max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Access your account to manage your profile information, update your details, and more.
                </motion.p>
                <motion.button
                    onClick={handleLogin}
                    className="flex items-center gap-3 px-8 py-3 sm:px-10 sm:py-4 bg-black text-white font-semibold text-sm sm:text-base rounded-none hover:bg-gray-800 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <LogIn className="w-5 h-5" />
                    <span>LOGIN</span>
                </motion.button>
            </motion.div>
        )
    }

    // If user is logged in, show profile content
    return (
        <>
            <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 items-center">
                    {/* Full Name */}
                    <ProfileInput
                        label="Your full name"
                        value={currentUserDetails.userName}
                        placeholder="Enter your full name"
                        delay={0.1}
                    />
                    <motion.div
                        className="justify-self-start lg:justify-self-end"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <ChangeLink text="CHANGE NAME" />
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 items-center">
                    {/* Email */}
                    <ProfileInput
                        label="Your E-mail"
                        value={currentUserDetails.userEmail}
                        placeholder="Enter your email"
                        delay={0.3}
                    />
                    <div className="hidden lg:block">{/* Placeholder for alignment */}</div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 items-center">
                    {/* Password */}
                    <ProfileInput label="Your password" value="********" placeholder="Enter new password" delay={0.4} />
                    <motion.div
                        className="justify-self-start lg:justify-self-end"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <div onClick={() => setShowPasswordModal(true)} className="cursor-pointer">
                            <ChangeLink text="CHANGE PASSWORD" />
                        </div>
                    </motion.div>
                </div>
                {/* Logout Button */}
                <motion.div
                    className="pt-6 sm:pt-8 border-t border-gray-200 flex justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <motion.button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-8 py-3 sm:px-10 sm:py-4 bg-red-600 text-white font-semibold text-sm sm:text-base rounded-none hover:bg-red-700 transition-colors"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <LogOut className="w-5 h-5" />
                        <span>LOGOUT</span>
                    </motion.button>
                </motion.div>
            </div>

            {/* Password Change Modal */}
            <AnimatePresence>
                {showPasswordModal && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowPasswordModal(false)}
                    >
                        <motion.div
                            className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-full"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Change Password</h2>
                                <motion.button
                                    onClick={() => setShowPasswordModal(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X className="w-6 h-6" />
                                </motion.button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handlePasswordChange} className="space-y-4">
                                {/* Current Password */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Current Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPasswords.current ? 'text' : 'password'}
                                            value={passwordForm.currentPassword}
                                            onChange={(e) =>
                                                setPasswordForm({ ...passwordForm, currentPassword: e.target.value })
                                            }
                                            className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                                            placeholder="Enter current password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => togglePasswordVisibility('current')}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                        >
                                            {showPasswords.current ? (
                                                <EyeOff className="w-5 h-5" />
                                            ) : (
                                                <Eye className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* New Password */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPasswords.new ? 'text' : 'password'}
                                            value={passwordForm.newPassword}
                                            onChange={(e) =>
                                                setPasswordForm({ ...passwordForm, newPassword: e.target.value })
                                            }
                                            className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                                            placeholder="Enter new password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => togglePasswordVisibility('new')}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                        >
                                            {showPasswords.new ? (
                                                <EyeOff className="w-5 h-5" />
                                            ) : (
                                                <Eye className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm Password */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Confirm New Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPasswords.confirm ? 'text' : 'password'}
                                            value={passwordForm.confirmPassword}
                                            onChange={(e) =>
                                                setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })
                                            }
                                            className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                                            placeholder="Confirm new password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => togglePasswordVisibility('confirm')}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                        >
                                            {showPasswords.confirm ? (
                                                <EyeOff className="w-5 h-5" />
                                            ) : (
                                                <Eye className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Error Message */}
                                {passwordError && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded text-sm"
                                    >
                                        {passwordError}
                                    </motion.div>
                                )}

                                {/* Success Message */}
                                {passwordSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded text-sm"
                                    >
                                        Password changed successfully!
                                    </motion.div>
                                )}

                                {/* Buttons */}
                                <div className="flex gap-3 pt-4">
                                    <motion.button
                                        type="button"
                                        onClick={() => setShowPasswordModal(false)}
                                        className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 font-semibold rounded-none hover:bg-gray-50 transition-colors"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Cancel
                                    </motion.button>
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-1 px-4 py-3 bg-black text-white font-semibold rounded-none hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                    >
                                        {isSubmitting ? 'Changing...' : 'Change Password'}
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default ProfileContent
