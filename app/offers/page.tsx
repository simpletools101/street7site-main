import SeventyOff from "@/components/normal/main/70%/seventy";
import OffersItemSection from "@/components/normal/offers/offersItem";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Offers',
}

export default function Page() {
    return (
        <div>
            <SeventyOff/>
            <OffersItemSection/>
        </div>
    )
}