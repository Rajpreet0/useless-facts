"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {ArrowDownToLine, Copy, Info} from "lucide-react";
import TooltipComponent from "./TooltipComponent";
import { toast } from "sonner";
import { useRef } from "react";
import { toPng } from "html-to-image";

interface CardsProps {
  contentText: string | null;
  source: string | null;
  sourceURl: string | null;
}

const Cards: React.FC<CardsProps> = ({contentText, source, sourceURl}) => {

  const factRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to Clipboard successfully.");
    } catch (error) {
      console.error("Failed to copy", error);
    }
  }

 const downloadAsImage = async () => {
  if (!factRef.current) return;

  try {
    const dataUrl = await toPng(factRef.current, {
      cacheBust: true,
      backgroundColor: '#FEF5E7',
      pixelRatio: 2,
    });

    const link = document.createElement('a');
    link.download = 'useless_fact.png';
    link.href = dataUrl;
    link.click();

    toast.success("Downloaded fact as image.");
  } catch (error) {
    console.error("Failed to download image", error);
    toast.error("Failed to download image.");
  }
}

  return (
    <Card className="relative p-4 rounded-2xl shadow-xl border border-gray-200  max-w-md mx-auto md:max-w-xl">
      <CardHeader className="flex justify-end p-0">
        <div className="flex items-center gap-3">
          <ArrowDownToLine 
            onClick={() => downloadAsImage()}
            className="text-gray-400 w-5 h-5 hover:scale-110 hover:text-black transition-transform cursor-pointer" />
          <Copy 
            onClick={() => copyToClipboard(contentText!)}
            className="text-gray-400 w-5 h-5 hover:scale-110 hover:text-black transition-transform cursor-pointer" />
          <TooltipComponent
              source={source}
              contentSource={sourceURl}>
            <Info className="text-gray-400 w-5 h-5 hover:scale-110 hover:text-black transition-transform cursor-pointer" />
          </TooltipComponent>
        </div>
      </CardHeader>
      <CardContent 
        ref={factRef}
        className="pt-6">
        <p className="text-lg text-center font-semibold leading-relaxed text-gray-800  md:text-2xl">
          {contentText ?? "Klicke auf Generate, um einen Fakt zu laden."}
        </p>
      </CardContent>
      <CardFooter>

      </CardFooter>
    </Card>
  )
}

export default Cards