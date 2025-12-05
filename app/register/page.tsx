import RegisterItem from "@/components/normal/register/registerItem";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Create an Account',
}


export default function Page() {
    return (
        <div>

            <RegisterItem/>
        </div>
    )
}