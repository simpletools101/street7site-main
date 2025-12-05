'use client'

import Carousel from '@/components/common/base/carousel'
import FavItem from './favItem'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FetchedProducts, IN_MEMORY_FOR_PRODUCTS } from '@/lib/wishlistManager'

interface ICurrentFetchedProductsFromShopify {
    productID: string
    currentImageSource: string
    productLink: string
    productDescription: string
}

export default function FavSectionsCarousel() {
    const [currentProducts, setCurrentProducts] = useState<ICurrentFetchedProductsFromShopify[]>([])

    const reMapProducts = (fetchedProducts: FetchedProducts[]): ICurrentFetchedProductsFromShopify[] => {
        return fetchedProducts.map((item) => ({
            productID: item.id,
            currentImageSource: item.featuredImage,
            productDescription: item.title,
            productLink: `/product/${item.title}`,
        }))
    }

    const initalProductDeliver = async (): Promise<FetchedProducts[] | null> => {
        try {
            const res = await fetch(`/api/products`)
            if (!res.ok) throw new Error('Failed to fetch products')

            const data = await res.json()
            

            if (data) {
                // Save in memory (must be a let not const)
                
            }

            return data // ✅ return fetched products
        } catch (err) {
            console.error(err)
            return null // return something predictable
        }
    }

    useEffect(() => {
        const fetchExistingProductsFromShopifyStore = async () => {
            try {
                let fetchedData = await initalProductDeliver()
                if (fetchedData) {
                    if (fetchedData.length > 0) {
                        setCurrentProducts(reMapProducts(fetchedData))
                        
                    } else {
                        
                    }
                }
            } catch (err) {
                console.error('Error loading products', err)
            }
        }

        fetchExistingProductsFromShopifyStore()
    }, []) // FIXED

    return (
        <section
            className="
                mt-8
                flex flex-col
                min-h-[400px] md:min-h-[500px] lg:min-h-[550px]
                justify-center
                gap-8
            "
        >
            <motion.h1
                className="text-2xl mt-6 tb sm:text-2xl font-light text-center lg:text-left lg:text-3xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                whileHover={{ letterSpacing: '0.05em' }}
            >
                Your favs just got better
            </motion.h1>

            <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
                <Carousel>
                    {currentProducts.map((v) => (
                        <FavItem
                            key={v.productID}
                            description={v.productDescription}
                            imgSource={v.currentImageSource}
                            link={v.productLink}
                            productID={v.productID}
                            onDidAddToWishList={() => {}}
                        />
                    ))}
                </Carousel>
            </motion.div>
        </section>
    )
}
