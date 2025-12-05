import Faq from "@/components/normal/faq/faqitem";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'FAQ',
}

export default function Page() {
    return (
        <div>
            <Faq/>
        </div>
    )
}