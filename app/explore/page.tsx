import ExplorePage from "@/components/pages/_explore";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Explore our Products',
}

export default async function Page() {
    return (
        <ExplorePage/>
    )
}