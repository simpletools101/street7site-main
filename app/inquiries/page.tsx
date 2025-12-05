import InquiriesItem from "@/components/normal/inquiries/inquiriesItem";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Inquiries',
}

export default function Page() {
    return (
        <div>
            <InquiriesItem/>
        </div>
    )
}