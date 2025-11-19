import { ArrowRight } from 'lucide-react'

interface OrderItemProps {
    status: 'Delivered' | 'In transit' | 'Failed'
    statusColor: string
    productName: string
    price: number
    date: string
    image: string
    imageAlt: string
    productLink: string
}

const OrderItem: React.FC<OrderItemProps> = ({
    status,
    statusColor,
    productName,
    price,
    date,
    image,
    imageAlt,
    productLink,
}) => (
    <div className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-100 last:border-b-0 py-4 gap-4">
        {/* Product Image */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 shrink-0 overflow-hidden bg-gray-100">
            <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
                onError={(e) => {
                    ;(e.target as HTMLImageElement).onerror = null
                    ;(e.target as HTMLImageElement).src = 'https://placehold.co/64x64/EFEFEF/333333?text=P'
                }}
            />
        </div>

        {/* Order Details */}
        <div className="grow w-full sm:w-auto">
            <div className="flex flex-col space-y-3">
                {/* Product Name & Price */}
                <div>
                    <p className="text-sm sm:text-base font-medium text-gray-800 line-clamp-2 mb-1">
                        {productName}
                    </p>
                    <div className="flex items-center text-xs sm:text-sm">
                        <span className="font-semibold text-gray-900">${price}</span>
                        <span className="text-xs text-gray-500 ml-2">Shipping Inclusive</span>
                    </div>
                </div>

                {/* Status & Date */}
                <div className="flex flex-wrap items-center gap-2">
                    <span
                        className="text-xs font-semibold py-1 px-2 inline-block"
                        style={{ backgroundColor: statusColor, color: '#000' }}
                    >
                        {status}
                    </span>
                    <span className="text-xs text-gray-500">on {date}</span>
                </div>

                {/* Details Link */}
                <a
                    href={productLink}
                    className="flex items-center text-xs sm:text-sm font-semibold transition duration-150 group w-fit"
                    style={{ color: '#333' }}
                >
                    SEE DETAILS
                    <ArrowRight
                        size={14}
                        className="sm:w-4 sm:h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                    />
                </a>
            </div>
        </div>
    </div>
)

const OrdersContent: React.FC = () => {
    // Mock data for the 4 orders shown in the image
    const orderData: OrderItemProps[] = [
        {
            status: 'Delivered',
            statusColor: '#C8FAD6', // Light Green
            productName: 'Red Light Therapy Mask',
            price: 245,
            date: '02-09-2025',
            image: 'https://placehold.co/64x64/EFEFEF/333333?text=Mask',
            imageAlt: 'Red Light Therapy Mask',
            productLink: '/product/id',
        },
        {
            status: 'In transit',
            statusColor: '#FFFF99', // Light Yellow
            productName: 'Red Light Therapy Mask',
            price: 245,
            date: '02-09-2025',
            image: 'https://placehold.co/64x64/EFEFEF/333333?text=Steamer',
            imageAlt: 'Garment Steamer',
            productLink: '/product/id',
        },
        {
            status: 'Failed',
            statusColor: '#FDDCDC', // Light Red
            productName: 'Red Light Therapy Mask',
            price: 245,
            date: '02-09-2025',
            image: 'https://placehold.co/64x64/EFEFEF/333333?text=Bag',
            imageAlt: 'Green Bag',
            productLink: '/product/id',
        },
        {
            status: 'Delivered',
            statusColor: '#C8FAD6', // Light Green
            productName: 'Red Light Therapy Mask',
            price: 245,
            date: '02-09-2025',
            image: 'https://placehold.co/64x64/EFEFEF/333333?text=Bodysuit',
            imageAlt: 'Brown Bodysuit',
            productLink: '/product/id',
        },
    ]

    return (
        <div className="space-y-0">
            {orderData.map((order, index) => (
                <OrderItem key={index} {...order} />
            ))}
        </div>
    )
}

export default OrdersContent