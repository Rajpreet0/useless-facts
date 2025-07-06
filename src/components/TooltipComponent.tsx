import React from "react"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

interface TooltipComponentProps {
    children: React.ReactNode;
    source: string | null;
    contentSource: string | null;
}

const TooltipComponent: React.FC<TooltipComponentProps> = ({children, source, contentSource}) => {
  return (
    <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
            <div className="w-full flex flex-col items-center justify-center">
                <p>{`Source: ${source}`}</p>
                <a 
                    href={contentSource ?? ""}
                    className="hover:underline text-center mt-1 text-lg">Link</a>
            </div>
        </TooltipContent>
    </Tooltip>
  )
}

export default TooltipComponent
