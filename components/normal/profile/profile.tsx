'use client'
import React, { useState } from 'react'
import { Heart, ShoppingBag, User, X } from 'lucide-react'
import { ACCENT_COLOR } from './utils'
import WishlistContent from './wishlistContent'
import OrdersContent from './orderContent'
import ProfileContent from './profileContent'
import { useParams, useRouter } from 'next/navigation'

// --- Types ---
type Tab = 'wishlist' | 'orders' | 'profile'

// --- Shared Components (for internal use) ---
// Tab component
const TabItem: React.FC<{ icon: React.ReactNode; label: string; active: boolean; onClick: () => void }> = ({
    icon,
    label,
    active,
    onClick,
}) => (
    <button
        className="flex flex-col items-center py-3 sm:py-4 px-3 sm:px-6 lg:px-8 transition-colors duration-150 relative group flex-1 sm:flex-initial"
        onClick={onClick}
    >
        <div className="flex flex-col sm:flex-row items-center text-xs sm:text-sm font-medium">
            <span className="mb-1 sm:mb-0 sm:mr-2" style={{ color: active ? ACCENT_COLOR : '#333' }}>
                {icon}
            </span>
            <span className="text-center sm:text-left" style={{ color: active ? ACCENT_COLOR : '#333' }}>
                {label}
            </span>
        </div>
        {/* Underline indicator */}
        <div
            className="absolute bottom-0 h-0.5 sm:h-1 w-full"
            style={{ backgroundColor: active ? ACCENT_COLOR : 'transparent' }}
        />
    </button>
)

// --- Main Layout Component ---
interface AccountLayoutProps {
    initialTab: string
    children: (activeTab: string) => React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({ initialTab, children }) => {
    const [activeTab, setActiveTab] = useState<string>(initialTab)
    const router = useRouter()

    const gotoBackToHome = () => {
        router.push('/')
    }

    const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
        { id: 'wishlist', label: 'My Wishlist', icon: <Heart size={16} className="sm:w-[18px] sm:h-[18px]" /> },
        { id: 'orders', label: 'My orders', icon: <ShoppingBag size={16} className="sm:w-[18px] sm:h-[18px]" /> },
        { id: 'profile', label: 'My profile', icon: <User size={16} className="sm:w-[18px] sm:h-[18px]" /> },
    ]

    return (
        <div className="w-full min-h-screen bg-white font-sans flex justify-center">
            <div className="w-full max-w-5xl">
                {/* Top Header */}
                <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-100">
                    <div className="flex items-center">
                        {/* Avatar */}
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-[#fec000] flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                            <User size={16} className="sm:w-5 sm:h-5" />
                        </div>
                        <span className="text-sm sm:text-base lg:text-lg font-semibold tracking-wider truncate">
                            MARK OTIM
                        </span>
                    </div>
                    {/* Close Button */}
                    <button
                        onClick={gotoBackToHome}
                        className="text-gray-500 hover:text-gray-900 p-1.5 sm:p-2 rounded-full transition-colors flex-shrink-0"
                    >
                        <X size={20} className="sm:w-6 sm:h-6" />
                    </button>
                </div>

                {/* Navigation Tabs */}
                <div className="flex items-center justify-center border-b border-gray-200 overflow-x-auto">
                    {TABS.map((tab) => (
                        <TabItem
                            key={tab.id}
                            icon={tab.icon}
                            label={tab.label}
                            active={activeTab === tab.id}
                            onClick={() => setActiveTab(tab.id)}
                        />
                    ))}
                </div>

                {/* Content Area */}
                <div className="p-4 sm:p-6 lg:p-8">{children(activeTab)}</div>
            </div>
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
                    case 'orders':
                        return <OrdersContent />
                    case 'profile':
                        return <ProfileContent />
                    default:
                        return null
                }
            }}
        </AccountLayout>
    )
}