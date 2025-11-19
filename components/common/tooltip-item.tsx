import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'

interface IStreetTooltipProps {
    content: string
    children: React.ReactNode
}

export default function StreetTooltip(props: IStreetTooltipProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>{props.children}</TooltipTrigger>
                <TooltipContent>
                    <p>{props.content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}