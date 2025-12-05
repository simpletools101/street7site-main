import HowWeShip from "@/components/normal/how_ship/howship";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'How we Ship',
}


export default function Page() {
    return (
        <div>
            <HowWeShip/>
        </div>
    )
}