'use client'
import Link from 'next/link'
import LogoLink from './logolink'
import ICBtn, { ICBtn2 } from './base/icon-btn'
import { Gift, Heart, Search, UserRound, Menu, X } from 'lucide-react'
import LanguageXR from './base/language'
import { useRouter } from 'next/navigation'
import StreetTooltip from './tooltip-item'
import { useState } from 'react'

export default function HeaderItem() {
    const router = useRouter()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
    const gotoLoginPage = () => router.push('/login')
    const gotoWishList = () => router.push('/profile/wishlist')
    const gotoSearch = () => router.push('/search')
    const gotoOrders = () => router.push('/profile/orders')
    
    const closeMobileMenu = () => setMobileMenuOpen(false)
    
    return (
        <header className="w-full pb-4 sm:pb-6 space-y-4 sm:space-y-6 px-4 sm:px-8 lg:px-16">
            {/* Logo + Divider */}
            <div className="w-full mt-4 sm:mt-6 lg:mt-8 flex flex-col items-center justify-center space-y-3 sm:space-y-4">
                <LogoLink />
                <div className="bg-neutral-900 w-full h-px"></div>
            </div>

            {/* Main Navigation */}
            <div className="flex items-center justify-between w-full">
                {/* Mobile hamburger menu - Left side */}
                <div className="md:hidden">
                    <ICBtn 
                        description={mobileMenuOpen ? "Close menu" : "Open menu"} 
                        onDidClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </ICBtn>
                </div>

                {/* Desktop Navigation - Hidden on mobile */}
                <nav className="hidden md:flex uppercase space-x-6 lg:space-x-8 text-sm">
                    <Link href="/" className="hover:text-gray-600 transition-colors">
                        shop
                    </Link>
                    <Link href="/offers" className="hover:text-gray-600 transition-colors">
                        explore
                    </Link>
                    <Link href="/learn" className="hover:text-gray-600 transition-colors">
                        learn
                    </Link>
                    <Link href="/promo" className="hover:text-gray-600 transition-colors">
                        promo
                    </Link>
                </nav>

                {/* Actions - Right side */}
                <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                    {/* Mobile icons - Show only essential ones */}
                    <div className="flex md:hidden items-center space-x-2">
                        <StreetTooltip content="Search">
                            <ICBtn description="Search" onDidClick={gotoSearch}>
                                <Search className="h-5 w-5" />
                            </ICBtn>
                        </StreetTooltip>
                        <StreetTooltip content="Wishlist">
                            <ICBtn description="Wishlist" onDidClick={gotoWishList}>
                                <Heart className="h-5 w-5" />
                            </ICBtn>
                        </StreetTooltip>
                        <StreetTooltip content="Account">
                            <ICBtn onDidClick={gotoLoginPage} description="User Account">
                                <UserRound className="h-5 w-5" />
                            </ICBtn>
                        </StreetTooltip>
                    </div>

                    {/* Desktop icons - Show all */}
                    <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
                        <StreetTooltip content="Search">
                            <ICBtn description="Search">
                                <Search className="h-5 w-5" />
                            </ICBtn>
                        </StreetTooltip>
                        <StreetTooltip content="Orders">
                            <ICBtn2 description="Orders" badge={50} onDidClick={gotoOrders}>
                                <Gift className="h-5 w-5" />
                            </ICBtn2>
                        </StreetTooltip>
                        <StreetTooltip content="Wishlist">
                            <ICBtn description="Wishlist" onDidClick={gotoWishList}>
                                <Heart className="h-5 w-5" />
                            </ICBtn>
                        </StreetTooltip>
                        <StreetTooltip content="User Account">
                            <ICBtn onDidClick={gotoLoginPage} description="User Account">
                                <UserRound className="h-5 w-5" />
                            </ICBtn>
                        </StreetTooltip>
                        <div className="bg-black w-px h-6"></div>
                        <LanguageXR />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-gray-200 pt-4 animate-in slide-in-from-top duration-200">
                    <nav className="flex flex-col space-y-4">
                        <Link 
                            href="/" 
                            className="uppercase text-sm py-2 hover:text-gray-600 transition-colors text-center"
                            onClick={closeMobileMenu}
                        >
                            shop
                        </Link>
                        <Link 
                            href="/offers" 
                            className="uppercase text-sm py-2 hover:text-gray-600 transition-colors text-center"
                            onClick={closeMobileMenu}
                        >
                            explore
                        </Link>
                        <Link 
                            href="/learn" 
                            className="uppercase text-sm py-2 hover:text-gray-600 transition-colors text-center"
                            onClick={closeMobileMenu}
                        >
                            learn
                        </Link>
                        <Link 
                            href="/promo" 
                            className="uppercase text-sm py-2 hover:text-gray-600 transition-colors text-center"
                            onClick={closeMobileMenu}
                        >
                            promo
                        </Link>
                        
                        {/* Mobile-only additional options */}
                        <div className="border-t border-gray-200 pt-4 flex flex-col space-y-4">
                            <Link 
                                href="/profile/orders" 
                                className="uppercase text-sm py-2 hover:text-gray-600 transition-colors text-center"
                                onClick={closeMobileMenu}
                            >
                                orders
                            </Link>
                            <div className="flex items-center justify-center">
                                <LanguageXR />
                            </div>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}