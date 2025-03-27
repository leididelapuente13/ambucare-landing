import { Stethoscope,  } from "lucide-react"
import { playfair } from "../../fonts"

export const Logo = () => {
    return (
        <div className={`${playfair.className} text-gray-200 flex gap-1.5`}>
            <Stethoscope/>
            <h4 className="font-bold">SIOS Ambucare</h4>
        </div>
    )
}