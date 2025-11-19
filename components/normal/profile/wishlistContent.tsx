import { CheckoutButton, INPUT_BG_COLOR } from './utils'

const WishlistContent: React.FC = () => {
    // Mock data for the 4 items shown in the image
    const wishlistItems = [
        { id: 1, image: 'https://placehold.co/300x300/cccccc/cccccc', alt: 'LED Therapy Mask Kit' },
        { id: 2, image: 'https://placehold.co/300x300/cccccc/cccccc', alt: 'Man using tablet in bed' },
        {
            id: 3,
            image: 'https://placehold.co/300x300/cccccc/cccccc',
            alt: 'Man using tablet in bed, purple light',
        },
        { id: 4, image: 'https://placehold.co/300x300/cccccc/cccccc', alt: 'LED Therapy Mask Kit' },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {wishlistItems.map((item) => (
                <div key={item.id} className="flex flex-col overflow-hidden border border-gray-200">
                    {/* Image Area */}
                    <div className="p-3 sm:p-4" style={{ backgroundColor: INPUT_BG_COLOR }}>
                        <img src={item.image} alt={item.alt} className="w-full h-auto object-cover rounded" />
                    </div>
                    {/* Button Area */}
                    <div className="flex justify-end bg-neutral-200 p-2 sm:p-3">
                        <CheckoutButton />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WishlistContent