import ReturnPolicy from '@/components/normal/returnPolicy/returnPolicy'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Return Policy',
}

export default function Page() {
    return (
        <div>
            <ReturnPolicy />
        </div>
    )
}
