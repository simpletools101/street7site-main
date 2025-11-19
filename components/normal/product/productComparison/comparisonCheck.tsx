import { CircleCheck, CircleX } from 'lucide-react'

interface IComparisonCheckProps {
    isChecked: boolean
}

export default function ComparisonCheck(props: IComparisonCheckProps) {
    return (
        <div
            className={` h-12 text-xl w-12 flex items-center justify-center text-black ${
                props.isChecked ? 'bg-amber-200' : 'bg-neutral-300'
            } `}
        >
            {props.isChecked ? <CircleCheck size={28} strokeWidth={1.5} /> : <CircleX size={28}   strokeWidth={1.5} />}
        </div>
    )
}
