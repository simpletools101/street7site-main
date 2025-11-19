import { Badge } from "@/components/ui/badge"

interface ICBtnProps {
    description: string
    onDidClick?: () => void
    children: React.ReactNode
}

export default function ICBtn(props: ICBtnProps) {
    return (
        <div
            role="button"
            onClick={props.onDidClick}
            aria-description={props.description}
            className="border w-10 h-10 rounded-full border-[#fec000] hover:text-white hover:bg-black active:bg-neutral-900 cursor-pointer flex items-center justify-center"
        >
            {props.children}
        </div>
    )
}



interface ICBtnProps2 {
    description: string
    onDidClick?: () => void
    children: React.ReactNode
    badge?: string | number | boolean
}

export function ICBtn2(props: ICBtnProps2) {
    const { badge } = props

    return (
        <div className="relative w-fit h-fit">
            <div
                role="button"
                onClick={props.onDidClick}
                aria-description={props.description}
                className="border w-10 h-10 rounded-full border-[#fec000] hover:text-white hover:bg-black active:bg-neutral-900 cursor-pointer flex items-center justify-center"
            >
                {props.children}
            </div>

            {/* Badge */}
            {badge ? (
                typeof badge === "boolean" ? (
                    // dot badge
                    <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 ring-2 ring-white" />
                ) : (
                    // shadcn badge with label
                    <Badge
                        className="absolute bg-[#fec000] text-black -top-1 -right-1 px-1.5 py-0 text-[10px] rounded-full"
                    >
                        {badge}
                    </Badge>
                )
            ) : null}
        </div>
    )
}
