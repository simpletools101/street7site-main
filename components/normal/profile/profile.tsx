'use client'
import React, { useEffect, useState } from 'react'
import { Heart, ShoppingBag, User, X } from 'lucide-react'
import { ACCENT_COLOR } from './utils'
import WishlistContent from './wishlistContent'
import OrdersContent from './orderContent'
import ProfileContent from './profileContent'
import { useParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Avatar from './userAvatar'
import { authClient } from '@/lib/auth/client'
import { useCustomerStore } from '@/lib/stores/customerStore'

// --- Types ---
type Tab = 'wishlist'  | 'p'

// --- Shared Components (for internal use) ---
// Tab component
const TabItem: React.FC<{ icon: React.ReactNode; label: string; active: boolean; onClick: () => void }> = ({
    icon,
    label,
    active,
    onClick,
}) => (
    <motion.button
        className="flex flex-col items-center py-3 sm:py-4 px-3 sm:px-6 lg:px-8 transition-colors duration-150 relative group flex-1 sm:flex-initial"
        onClick={onClick}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
    >
        <div className="flex flex-col sm:flex-row items-center text-xs sm:text-sm font-medium">
            <motion.span
                className="mb-1 sm:mb-0 sm:mr-2"
                style={{ color: active ? ACCENT_COLOR : '#333' }}
                animate={{ scale: active ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
            >
                {icon}
            </motion.span>
            <span className="text-center sm:text-left" style={{ color: active ? ACCENT_COLOR : '#333' }}>
                {label}
            </span>
        </div>
        {/* Underline indicator */}
        <motion.div
            className="absolute bottom-0 h-0.5 sm:h-1 w-full"
            style={{ backgroundColor: ACCENT_COLOR }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: active ? 1 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
    </motion.button>
)

// --- Main Layout Component ---
interface AccountLayoutProps {
    initialTab: string
    children: (activeTab: string) => React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({ initialTab, children }) => {
    const [activeTab, setActiveTab] = useState<string>(initialTab)
    const [currentUserDetails, setUserDetails] = useState<{
        userName: string
        userImage: string | null | undefined
    }>({
        userImage: null,
        userName: 'Guest',
    })
    const { customer } = useCustomerStore()

    const router = useRouter()

    const gotoBackToHome = () => {
        router.push('/')
    }

    const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
        { id: 'wishlist', label: 'My Wishlist', icon: <Heart size={16} className="sm:w-[18px] sm:h-[18px]" /> },
        { id: 'p', label: 'My profile', icon: <User size={16} className="sm:w-[18px] sm:h-[18px]" /> },
    ]

    useEffect(() => {
        const intialRun = async () => {
            /**
             * Check for authenticated User.
             */
            if (customer && customer != null) {
                setUserDetails({
                    userName: `${customer.firstName}\t ${customer.lastName}`,
                    userImage: null,
                })
            }
        }
        intialRun()
    }, [])

    return (
        <div className="w-full min-h-screen bg-white font-sans flex justify-center">
            <motion.div
                className="w-full max-w-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                {/* Top Header */}
                <motion.div
                    className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-100"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                >
                    <div className="flex items-center">
                        {/* Avatar */}
                        <Avatar imageUrl={currentUserDetails.userImage} />
                        <motion.span
                            className="text-sm sm:text-base lg:text-lg font-semibold tracking-wider truncate"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            {currentUserDetails.userName}
                        </motion.span>
                    </div>
                    {/* Close Button */}
                    <motion.button
                        onClick={gotoBackToHome}
                        className="text-gray-500 hover:text-gray-900 p-1.5 sm:p-2 rounded-full transition-colors flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <X size={20} className="sm:w-6 sm:h-6" />
                    </motion.button>
                </motion.div>

                {/* Navigation Tabs */}
                <motion.div
                    className="flex items-center justify-center border-b border-gray-200 overflow-x-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {TABS.map((tab, index) => (
                        <motion.div
                            key={tab.id}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        >
                            <TabItem
                                icon={tab.icon}
                                label={tab.label}
                                active={activeTab === tab.id}
                                onClick={() => setActiveTab(tab.id)}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        className="p-4 sm:p-6 lg:p-8"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        {children(activeTab)}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

// Default export is the main application wrapper
export default function ProfileManager() {
    const { id } = useParams()
    let currentTab = id as string

    return (
        <AccountLayout initialTab={currentTab}>
            {(activeTab) => {
                switch (activeTab) {
                    case 'wishlist':
                        return <WishlistContent />
                    
                    case 'p':
                        return <ProfileContent />
                    default:
                        return null
                }
            }}
        </AccountLayout>
    )
}
