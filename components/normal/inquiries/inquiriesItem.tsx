import React from 'react'
import { Mail, Phone, ArrowRight } from 'lucide-react'

const InquiriesItem = () => {
    // Common styles for the large, prominent icons
    const iconProps = {
        className: 'w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 text-[#fec000] mx-auto md:mx-0',
        strokeWidth: 1.5,
    }

    const placeholderText =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean.'

    // Component for a single contact card
    const ContactCard: React.FC<{
        icon: React.ReactNode
        title: string
        buttonText: string
        actionLink: string
    }> = ({ icon, title, buttonText, actionLink }) => (
        <div className="p-6 sm:p-8 bg-neutral-100 flex flex-col justify-between h-full min-h-[280px] sm:min-h-[320px]">
            {/* Icon and Text */}
            <div>
                <div className="flex justify-center md:justify-start">{icon}</div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 text-center md:text-left">
                    {placeholderText}
                </p>
            </div>
            {/* Button */}
            <a
                href={actionLink}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-black text-[#fec000] font-bold text-xs sm:text-sm tracking-wider rounded-none transition-transform transform hover:bg-gray-900 active:scale-[0.99] border-2 border-black mt-auto"
            >
                <span>{buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
        </div>
    )

    return (
        <div className="min-h-screen bg-white font-sans flex justify-center">
            {/* Main Content Container: centered and constrained */}
            <div className="w-full max-w-4xl px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
                {/* Title: Large, heavy, and spaced, mimicking the image's display font */}
                <h1 className="text-3xl tb sm:text-4xl md:text-4xl lg:text-4xl mb-8 sm:mb-10 md:mb-12 text-center text-gray-900 leading-tight">
                    Inquiries
                </h1>

                {/* Contact Cards Section: Responsive grid/flex for two columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
                    <ContactCard
                        icon={<Mail {...iconProps} />}
                        title="Email"
                        buttonText="Send email"
                        actionLink="mailto:inquiries@street7.com"
                    />
                    <ContactCard
                        icon={<Phone {...iconProps} />}
                        title="Phone"
                        buttonText="Make phone call"
                        actionLink="tel:+1-555-123-4567"
                    />
                </div>

                {/* Bottom Text Section */}
                <div className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InquiriesItem