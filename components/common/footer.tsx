import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import currentLogo from "@/assets/Layer 2-1.png"

const FooterItem: React.FC = () => {
    return (
        <footer className="w-full bg-white border-t border-black mt-8 sm:mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
                    {/* Links Container */}
                    <div className="flex flex-col sm:flex-row flex-1 gap-8 sm:gap-12 lg:gap-20 xl:gap-30">
                        {/* HELP Section */}
                        <div className="flex-1 sm:flex-none">
                            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">HELP</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                <li>
                                    <a href="/how-we-ship" className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">
                                        Shipping
                                    </a>
                                </li>
                                <li>
                                    <a href="/faq" className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">
                                        Payment
                                    </a>
                                </li>
                                <li>
                                    <a href="/inquiries" className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">
                                        Make Inquiries
                                    </a>
                                </li>
                                <li>
                                    <a href="/profile/orders" className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">
                                        Orders
                                    </a>
                                </li>
                                <li>
                                    <a href="/return-policy" className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">
                                        Return Policy
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* QUICK LINKS Section */}
                        <div className="flex-1 sm:flex-none">
                            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">QUICK LINKS</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                <li>
                                    <a href="/offers" className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">
                                        Explore offers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">
                                        Shop
                                    </a>
                                </li>
                                <li>
                                    <a href="/about" className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">
                                        About Street 7
                                    </a>
                                </li>
                                <li>
                                    <a href="/inquiries" className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">
                                        Contact us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">
                                        Terms & Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* MY ACCOUNT Section */}
                        <div className="flex-1 sm:flex-none">
                            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">MY ACCOUNT</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                <li>
                                    <a href="/login" className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">
                                        Sign In
                                    </a>
                                </li>
                                <li>
                                    <a href="/register" className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">
                                        Register
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="w-full lg:w-auto">
                        <div className="min-h-[200px] sm:min-h-[250px] lg:h-[250px] p-6 sm:p-8 lg:p-12 w-full lg:w-[400px] xl:w-[450px] flex flex-col justify-center text-white bg-neutral-800">
                            <Link href={'/'} className='mb-4'>
                                <img 
                                    src={currentLogo.src} 
                                    width={200} 
                                    height={200}
                                    className="w-40 sm:w-52 lg:w-[250px] h-auto" 
                                    alt="Street7 Logo"
                                />
                            </Link>
                            <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                                Become a member of Street7 client community and get exclusive deals and offers on all
                                our products!
                            </p>
                            <a href='/register' className="flex items-center gap-2 text-white hover:gap-4 transition-all duration-300 group">
                                <span className="text-xs sm:text-sm font-medium tracking-wider">JOIN THE COMMUNITY</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Section */}
                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 text-center md:text-left">
                    <p>The content of this site is copyright-protected and is the property of Street7</p>
                    <p>Des. Sleekcom Agency - 2025</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterItem