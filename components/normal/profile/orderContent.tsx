"use client"

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface OrderItemProps {
    status: 'Delivered' | 'In transit' | 'Failed'
    statusColor: string
    productName: string
    price: number
    date: string
    image: string
    imageAlt: string
    productLink: string
    index: number
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
    index,
}) => (
    <motion.div
        className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-100 last:border-b-0 py-4 gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
    >
        {/* Product Image */}
        <motion.div
            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 shrink-0 overflow-hidden bg-gray-100"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
                onError={(e) => {
                    ;(e.target as HTMLImageElement).onerror = null
                    ;(e.target as HTMLImageElement).src = 'https://placehold.co/64x64/EFEFEF/333333?text=P'
                }}
            />
        </motion.div>
        {/* Order Details */}
        <div className="grow w-full sm:w-auto">
            <div className="flex flex-col space-y-3">
                {/* Product Name & Price */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                >
                    <p className="text-sm sm:text-base font-medium text-gray-800 line-clamp-2 mb-1">
                        {productName}
                    </p>
                    <div className="flex items-center text-xs sm:text-sm">
                        <span className="font-semibold text-gray-900">${price}</span>
                        <span className="text-xs text-gray-500 ml-2">Shipping Inclusive</span>
                    </div>
                </motion.div>
                {/* Status & Date */}
                <motion.div
                    className="flex flex-wrap items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                >
                    <motion.span
                        className="text-xs font-semibold py-1 px-2 inline-block"
                        style={{ backgroundColor: statusColor, color: '#000' }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {status}
                    </motion.span>
                    <span className="text-xs text-gray-500">on {date}</span>
                </motion.div>
                {/* Details Link */}
                <motion.a
                    href={productLink}
                    className="flex items-center text-xs sm:text-sm font-semibold transition duration-150 group w-fit"
                    style={{ color: '#333' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    whileHover={{ x: 5 }}
                >
                    SEE DETAILS
                    <motion.div
                        className="ml-2"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                    </motion.div>
                </motion.a>
            </div>
        </div>
    </motion.div>
)

const OrdersContent: React.FC = () => {
    // Mock data for the 4 orders shown in the image
    const orderData: Omit<OrderItemProps, 'index'>[] = [
        {
            status: 'Delivered',
            statusColor: '#C8FAD6', // Light Green
            productName: 'Red Light Therapy Mask',
            price: 245,
            date: '02-09-2025',
            image: 'https://placehold.co/64x64/EFEFEF/333333?text=Mask',
            imageAlt: 'Red Light Therapy Mask',
            productLink: '/product/red-light-therapy-mask/id',
        },
        {
            status: 'In transit',
            statusColor: '#FFFF99', // Light Yellow
            productName: 'Red Light Therapy Mask',
            price: 245,
            date: '02-09-2025',
            image: 'https://placehold.co/64x64/EFEFEF/333333?text=Steamer',
            imageAlt: 'Garment Steamer',
            productLink: '/product/red-light-therapy-mask/id',
        },
        {
            status: 'Failed',
            statusColor: '#FDDCDC', // Light Red
            productName: 'Red Light Therapy Mask',
            price: 245,
            date: '02-09-2025',
            image: 'https://placehold.co/64x64/EFEFEF/333333?text=Bag',
            imageAlt: 'Green Bag',
            productLink: '/product/red-light-therapy-mask/id',
        },
        {
            status: 'Delivered',
            statusColor: '#C8FAD6', // Light Green
            productName: 'Red Light Therapy Mask',
            price: 245,
            date: '02-09-2025',
            image: 'https://placehold.co/64x64/EFEFEF/333333?text=Bodysuit',
            imageAlt: 'Brown Bodysuit',
            productLink: '/product/red-light-therapy-mask/id',
        },
    ]

    return (
        <div className="space-y-0">
            {orderData.map((order, index) => (
                <OrderItem key={index} {...order} index={index} />
            ))}
        </div>
    )
}

export default OrdersContent