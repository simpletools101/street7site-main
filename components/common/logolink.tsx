import Link from "next/link";
import currentLogo from "@/assets/Layer 2.png"

export default function LogoLink() {
    return (
        <Link href={"/"}>
            <img src={currentLogo.src} width={250} height={250} alt="Street7 Logo"></img>
        </Link>
    )
}