import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {ArrowDownToLine, Copy, Info} from "lucide-react";

const Cards = () => {
  return (
    <Card className="relative p-4 rounded-2xl shadow-xl border border-gray-200  max-w-md mx-auto md:max-w-xl">
      <CardHeader className="flex justify-end p-0">
        <div className="flex items-center gap-3">
          <ArrowDownToLine className="text-gray-400 w-5 h-5 hover:scale-110 hover:text-black transition-transform cursor-pointer" />
          <Copy className="text-gray-400 w-5 h-5 hover:scale-110 hover:text-black transition-transform cursor-pointer" />
          <Info className="text-gray-400 w-5 h-5 hover:scale-110 hover:text-black transition-transform cursor-pointer" />
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-lg text-center font-semibold leading-relaxed text-gray-800 break-words md:text-2xl">
          Menschen erholen sich nach Operationen schneller,<br /> wenn vor ihrem Krankenhauszimmer Bäume stehen.
        </p>
      </CardContent>
      <CardFooter>

      </CardFooter>
    </Card>
  )
}

export default Cards