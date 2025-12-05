import LoginItem from "@/components/normal/login/loginItem";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Login',
}

export default function Page() {
    return (
        <div>
            <LoginItem/>
        </div>
    )
}